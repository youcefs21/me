import * as React from "react";
import '../styles/terminal.css'

class Terminal extends React.Component<{}, { inputValue: string }> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div className={"box"}>
        <input 
          value={""} 
          className="terminal-input" 
          onKeyDown={evt => this.updateSpecialInput(evt)}
          onChange={evt => this.updateInputValue(evt)}
        />
        <div className="terminal-text">
          {this.state.inputValue}<b className="terminal-cursor">█</b>
        </div>
      </div>
    )
  }

  updateSpecialInput(evt: React.KeyboardEvent<HTMLDivElement>) {
    const key = evt.key;
    var val = this.state.inputValue
    if (key === "Backspace"){
      val = val.slice(0, -1);
    }
    console.log(key)
    this.setState({inputValue: val})
  }

  updateInputValue(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value;
    this.setState({inputValue: this.state.inputValue + val})
  }


}


export default Terminal