import * as React from "react";
import '../styles/terminal.css'
import {BannerJSX, CommandNotFound, HelpCommand} from "./commands";


type terminalState = { 
  inputValue: string,
  consoleLog: JSX.Element[],
  prefix: string
}

class Terminal extends React.Component<{},terminalState> {

  nameInput: HTMLInputElement  | null;

  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: '',
      consoleLog: [
        <BannerJSX key={"InitialBanner"}/>
      ],
      prefix: "me@youcefs21.github.io:~$ "
    };
    this.nameInput = null;
  }

  render() {
    return (
      <div className={"box"}  onClickCapture={evt => this.focusInput(evt)}>
        <div className="green-terminal-text terminal-text">
          {
            // I have no idea why I need map for this to work by
            // ¯\_(ツ)_/¯
            this.state.consoleLog.map(
              function (value) {
                return value;
              }
            )
          }
          <b>{this.state.prefix}</b>
          <span className={"orange-terminal-text"}>{this.state.inputValue}</span>
          <b className="terminal-cursor">█</b>
        </div>
        <form onSubmit={evt => this.processSubmission(evt)}>
          <input
            value={""}
            className="terminal-input"
            ref={(input) => { this.nameInput = input; }}
            onKeyDown={evt => this.processSpecialInput(evt)}
            onChange={evt => this.processCharInput(evt)}
          />
        </form>
      </div>
    )
  }

  focusInput(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.nameInput != null){
      this.nameInput.focus();
    }
  }

  processSpecialInput(evt: React.KeyboardEvent<HTMLDivElement>) {
    const key = evt.key;
    let val = this.state.inputValue
    if (key === "Backspace"){
      val = val.slice(0, -1);
    }
    else if (key === "l" && evt.ctrlKey){
      this.setState({
        consoleLog: []
      })
      evt.preventDefault();
    }
/*    else if (key === "ArrowUp" && this.state.inputHistoryB.length > 0) {
      this.state.inputHistoryF.push(this.state.inputValue)
      const newInput = this.state.inputHistoryB.pop()!
      this.setState({
        inputHistoryF: this.state.inputHistoryF,
        inputValue: newInput,
        inputHistoryB: this.state.inputHistoryB
      })
    }
    else if (key === "ArrowDown") {

    }*/
    this.setState({inputValue: val})
  }

  processCharInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value;
    this.setState({inputValue: this.state.inputValue + val})
  }

  processSubmission(evt: React.FormEvent<HTMLFormElement>) {
    this.state.consoleLog.push(
      (
        <div key={"prompt" + this.state.consoleLog.length.toString()}>
          <b>{this.state.prefix}</b>
          <span className={"orange-terminal-text"}>{this.state.inputValue}</span>
        </div>
      )
    )
    const args = this.state.inputValue.split(" ")
    const key = "response" + this.state.consoleLog.length.toString()
    let commandResponse = <CommandNotFound command={args[0]} key={key}/>
    switch (args[0]) {
      case "help":
        commandResponse = <HelpCommand key={key}/>
        break
      case "banner":
        commandResponse = <BannerJSX key={key}/>
    }

    this.state.consoleLog.push(commandResponse)

    this.setState({
      inputValue: "",
      consoleLog: this.state.consoleLog
    });
    evt.preventDefault();
  }


}


export default Terminal