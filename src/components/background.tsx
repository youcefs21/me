import * as React from "react";
import '../styles/background.css'

const Background = ({children, className, zIndex}: {children: JSX.Element, className: string, zIndex: number}) => {
  return (
    <div className={"backdrop-parent"} style={{zIndex:zIndex}}>
      <div className={"backdrop " + className}>
        {children}
      </div>
    </div>
  )
}

export default Background