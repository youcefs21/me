import * as React from "react";
import '../styles/background.css'
import Binary from "./binary";

interface BackgroundType {
  children: JSX.Element[] | JSX.Element, className: string, zIndex: number
}

const Background = ({children, className, zIndex}: BackgroundType) => {
  return (
    <div className={"backdrop-parent"} style={{zIndex:zIndex}}>
      <div className={"backdrop " + className}>
        {children}
      </div>
    </div>
  )
}

export default Background