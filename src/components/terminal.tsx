import * as React from "react";
import '../styles/terminal.css'
import {CommandResponse, BannerJSX} from "./commands";
import {MutableRefObject, useRef, useState} from "react";



function Terminal() {

  const terminalInput = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [consoleLog, setConsoleLog] = useState([<BannerJSX key={"InitialBanner"}/>]);
  const [prefix, setPrefix] = useState('me@youcefs21.github.io:~$ ');
  const [commandHistory, setCommandHistory] = useState<(string | null)[]>([null]);  // this null serves as a rotation stop

  function processSpecialInput(evt: React.KeyboardEvent<HTMLDivElement>) {
    const key = evt.key;
    let val = inputValue;
    if (key === "Backspace"){
      val = val.slice(0, -1);
    }
    else if (key === "l" && evt.ctrlKey){
      setConsoleLog([])
      evt.preventDefault();
    }
    else if (key === "ArrowUp" && commandHistory.at(-1) != null) {
      commandHistory.unshift(val);
      val = commandHistory.pop()!;
    }
    else if (key === "ArrowDown" && commandHistory[0] != null && val!='') {
      commandHistory.push(val);
      val = commandHistory.shift()!;
    }
    setInputValue(val)
    setCommandHistory(commandHistory)
  }

  function processCharInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value;
    setInputValue(inputValue + val)
  }

  function processSubmission(evt: React.FormEvent<HTMLFormElement>) {
    consoleLog.push(
      (
        <div key={"prompt" + consoleLog.length.toString()}>
          <b>{prefix}</b>
          <span className={"orange-terminal-text"}>{inputValue}</span>
        </div>
      )
    )
    const args = inputValue.split(" ")
    const key = "response" + consoleLog.length.toString()
    if (inputValue != ""){
      consoleLog.push(<CommandResponse args={args} key={key}/>)
      commandHistory.push(inputValue)
    }

    setInputValue("")
    setConsoleLog(consoleLog)
    setCommandHistory(commandHistory)

    evt.preventDefault();
  }


  return (
    <div id="terminal" className={"terminal-box"} onClickCapture={evt => focusInput(evt, terminalInput)}>
      {
        consoleLog.map(
          function (value) {
            return value;
          }
        )
      }
      <b>{prefix}</b>
      <span className={"orange-terminal-text"}>{inputValue}</span>
      <b className="terminal-cursor">█</b>
      <form onSubmit={evt => processSubmission(evt)}>
        <input
          value={""}
          className="terminal-input"
          ref={terminalInput}
          onKeyDown={evt => processSpecialInput(evt)}
          onChange={evt => processCharInput(evt)}
        />
      </form>
    </div>
  )

}


function focusInput(evt: React.MouseEvent<HTMLDivElement, MouseEvent>, nameInput: MutableRefObject<any>) {
  if (nameInput.current != null){
    nameInput.current.focus();
  }
}



export default Terminal