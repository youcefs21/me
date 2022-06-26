import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";

export const CommandResponse = ({args}:{args: string[]}) => {
  switch (args[0]) {
    case "help":
      return <HelpCommand/>
    case "banner":
      return <BannerJSX/>
    case "ls":
      return <LSCommand/>
  }
  return <CommandNotFound command={args[0]}/>
}


function LSCommand() {
    interface dataType  {
      allDirectory: {
        nodes: {name: string}[]
      },
      allFile: {
        nodes: {name: string}[]
      }
    }
    const data: dataType = useStaticQuery(
      graphql`
          {
              allFile(filter: {relativeDirectory: {eq: ""}}) {
                  nodes {
                      name
                  }
              }
              allDirectory(filter: {relativeDirectory: {eq: ""}}) {
                  nodes {
                      name
                  }
              }
          }
      `
    )
  const lsContent = data.allDirectory.nodes.concat(data.allFile.nodes)
  console.log(data)
  return (
    <div>
      {
        lsContent.map(
          function (value) {
            return <p>{value.name}</p>
          }
        )
      }
    </div>
  )
}

export const BannerJSX = () => {
  return (
    <>
      <p>
        {"                                                           "} <br/>
        {" /00     /11                                       /000100 "} <br/>
        {"|  10   /10/                                      /00__  10"} <br/>
        {" \\  01 /00//111000  /10   /11  /1000100  /010100 | 10  \\__/"} <br/>
        {"  \\  0100//11__  00| 01  | 10 /10_____/ /00__  00| 0000    "} <br/>
        {"   \\  11/| 01  \\ 10| 00  | 00| 00      | 00011000| 11_/    "} <br/>
        {"    | 00 | 00  | 01| 10  | 00| 00      | 11_____/| 00      "} <br/>
        {"    | 01 |  010010/|  100001/|  0011010|  0110001| 10      "} <br/>
        {"    |__/  \\______/  \\______/  \\_______/ \\_______/|__/      "} <br/>
        {"                                                           "}
      </p>
      <p className={"orange-terminal-text"}>
        Welcome to my interactive terminal based portfolio.
      </p>
      <p className={"orange-terminal-text"}>
        For a list of available commands, type <span className="command">'help'</span>
      </p>
    </>
  )
}

const HelpCommand = () => {
  return (
      <p className={"orange-terminal-text"}>
        it's looking very deserted around here... <br/> <br/>
        ig <span className={"command"}>'banner'</span> is a thing
      </p>
  )
}

const CommandNotFound = ({command}: {command: string}) => {
  return (
    <p>
      <span className="command">'{command}'</span> command not found
    </p>
  )
}