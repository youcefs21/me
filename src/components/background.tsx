import * as React from "react";
import '../styles/background.css'

const Background = ({children, className, zIndex}: {children: JSX.Element, className: string, zIndex: number}) => {
  return (
    <div className={"backdrop " + className} style={{zIndex:zIndex}}>
      {children}
    </div>
  )
}

export default Background