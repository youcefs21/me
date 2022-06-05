import * as React from "react";
import '../styles/terminal.css'
import {CommandResponse, BannerJSX} from "./commands";


type terminalState = { 
  inputValue: string,
  consoleLog: JSX.Element[],
  prefix: string,
  commandHistory: (string | null)[]
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
      prefix: "me@youcefs21.github.io:~$ ",
      commandHistory: [
        null
      ]
    };
    this.nameInput = null;
  }

  render() {
    return (
      <div className={"terminal-box"}  onClickCapture={evt => this.focusInput(evt)}>
          {
            this.state.consoleLog.map(
              function (value) {
                return value;
              }
            )
          }
          <b>{this.state.prefix}</b>
          <span className={"orange-terminal-text"}>{this.state.inputValue}</span>
          <b className="terminal-cursor">█</b>
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
    let val = this.state.inputValue;
    if (key === "Backspace"){
      val = val.slice(0, -1);
    }
    else if (key === "l" && evt.ctrlKey){
      this.setState({
        consoleLog: []
      })
      evt.preventDefault();
    }
    else if (key === "ArrowUp" && this.state.commandHistory.at(-1) != null) {
      this.state.commandHistory.unshift(val);
      val = this.state.commandHistory.pop()!;
    }
    else if (key === "ArrowDown" && this.state.commandHistory[0] != null && val!='') {
      this.state.commandHistory.push(val);
      val = this.state.commandHistory.shift()!;
    }
    this.setState({
      inputValue: val,
      commandHistory: this.state.commandHistory
    });
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
    if (this.state.inputValue != ""){
      this.state.consoleLog.push(<CommandResponse args={args} key={key}/>)
      this.state.commandHistory.push(this.state.inputValue)
    }

    this.setState({
      inputValue: "",
      consoleLog: this.state.consoleLog,
      commandHistory: this.state.commandHistory
    });
    evt.preventDefault();
  }


}


export default Terminal