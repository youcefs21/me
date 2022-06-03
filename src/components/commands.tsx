import * as React from "react";

const commands = [
  "                                                           ",
  " /00     /11                                       /000100 ",
  "|  10   /10/                                      /00__  10",
  " \\  01 /00//111000  /10   /11  /1000100  /010100 | 10  \\__/",
  "  \\  0100//11__  00| 01  | 10 /10_____/ /00__  00| 0000    ",
  "   \\  11/| 01  \\ 10| 00  | 00| 00      | 00011000| 11_/    ",
  "    | 00 | 00  | 01| 10  | 00| 00      | 11_____/| 00      ",
  "    | 01 |  010010/|  100001/|  0011010|  0110001| 10      ",
  "    |__/  \\______/  \\______/  \\_______/ \\_______/|__/      ",
  "                                                           "
]

export const BannerJSX = () => {
  return (
    <div>
      {
        commands.map(
          function (value) {
            return <p>{value}</p>;
          }
        )
      }
      <p className={"orange-terminal-text"}>
        Welcome to my interactive terminal based portfolio.
      </p>
      <p className={"orange-terminal-text"}>
        For a list of available commands, type <span className="command">'help'</span>
      </p>
    </div>
  )
}

export const HelpCommand = () => {
  return (
      <p className={"orange-terminal-text"}>
        it's looking very deserted around here... <br/> <br/>
        ig <span className={"command"}>'banner'</span> is a thing
      </p>
  )
}

export const CommandNotFound = ({command}: {command: string}) => {
  return (
    <p>
      <span className="command">'{command}'</span> command not found
    </p>
  )
}