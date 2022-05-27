import * as React from "react";
import '../styles/terminal.css'


type terminalState = { 
  inputValue: string,
  consoleLog: string[],
  prefix: string
}

class Terminal extends React.Component<{},terminalState> {

  nameInput: HTMLInputElement  | null;

  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: '',
      consoleLog: [],
      prefix: "me@youcefs21.github.io:~$ "
    };
    this.nameInput = null;
  }

  render() {
    return (
      <div className={"box"}  onClickCapture={evt => this.focusInput(evt)}>
        <form onSubmit={evt => this.processSubmission(evt)}>
          <input 
            value={""} 
            className="terminal-input"
            ref={(input) => { this.nameInput = input; }} 
            onKeyDown={evt => this.processSpecialInput(evt)}
            onChange={evt => this.processCharInput(evt)}
          />
        </form>
        <div className="terminal-text">
          {
            this.state.consoleLog.map(
              function (value) {
                return <p style={{margin:"0 0 10px"}}>{value}</p>;
              }
            )
          }
          <b>{this.state.prefix}</b>{this.state.inputValue}<b className="terminal-cursor">█</b>
        </div>
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
    var val = this.state.inputValue
    if (key === "Backspace"){
      val = val.slice(0, -1);
    }
    if (key === "l" && evt.ctrlKey){
      this.setState({
        consoleLog: []
      })
      evt.preventDefault();
    }
    this.setState({inputValue: val})
  }

  processCharInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value;
    this.setState({inputValue: this.state.inputValue + val})
  }

  processSubmission(evt: React.FormEvent<HTMLFormElement>) {
    this.state.consoleLog.push(
      "me@youcefs21.github.io:~$ " + this.state.inputValue,
      "<insert cool response to the `" + this.state.inputValue + "` command here>"
    )
    
    this.setState({
      inputValue: "",
      consoleLog: this.state.consoleLog
    });
    evt.preventDefault();
  }


}


export default Terminal