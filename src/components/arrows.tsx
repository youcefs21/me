import * as React from "react";
import '../styles/arrows.css'

function goToBottom(e: React.MouseEvent) {
  let b = document.getElementById("pageBottom");
  b && b.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Arrows = () => {
  return (
    <button onClick={goToBottom} className={"arrows-button"}>
      <p className="arrow-text">click me</p>
      <svg width="38" height="60" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Arrows">
          <path id="BotArrow" opacity="0.8" d="M17.2322 46.7678C18.2085 47.7441 19.7915 47.7441 20.7678 46.7678L36.6777 30.8579C37.654 29.8816 37.654 28.2986 36.6777 27.3223C35.7014 26.346 34.1184 26.346 33.1421 27.3223L19 41.4645L4.85786 27.3223C3.88155 26.346 2.29864 26.346 1.32233 27.3223C0.34602 28.2986 0.34602 29.8816 1.32233 30.8579L17.2322 46.7678ZM16.5 41.25V45H21.5V41.25H16.5Z" fill="white"/>
          <path id="TopArrow" opacity="0.8" d="M17.2322 20.5178C18.2085 21.4941 19.7915 21.4941 20.7678 20.5178L36.6777 4.60786C37.654 3.63155 37.654 2.04864 36.6777 1.07233C35.7014 0.0960197 34.1184 0.0960197 33.1421 1.07233L19 15.2145L4.85786 1.07233C3.88155 0.0960197 2.29864 0.0960197 1.32233 1.07233C0.34602 2.04864 0.34602 3.63155 1.32233 4.60786L17.2322 20.5178ZM16.5 15V18.75H21.5V15H16.5Z" fill="white"/>
        </g>
      </svg>
    </button>
  )
}

export default Arrows