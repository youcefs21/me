import * as React from "react";
import '../styles/terminal.css'


type terminalState = { 
  inputValue: string,
  consoleLog: string[],
  prefix: string
}

class Terminal extends React.Component<{},terminalState> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: '',
      consoleLog: [],
      prefix: "me@youcefs21.github.io:~$ "
    };
  }

  render() {



    return (
      <div className={"box"}>
        <form onSubmit={evt => this.processSubmission(evt)}>
        <input 
          value={""} 
          className="terminal-input" 
          onKeyDown={evt => this.processSpecialInput(evt)}
          onChange={evt => this.processCharInput(evt)}
        />
        </form>
        <div className="terminal-text">
          {
            this.state.consoleLog.map(
              function (value) {
                return <p>{value}</p>;
              }
            )
          }
          {this.state.prefix}{this.state.inputValue}<b className="terminal-cursor">█</b>
        </div>
      </div>
    )
  }

  processSpecialInput(evt: React.KeyboardEvent<HTMLDivElement>) {
    const key = evt.key;
    var val = this.state.inputValue
    if (key === "Backspace"){
      val = val.slice(0, -1);
    }
    console.log(key)
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