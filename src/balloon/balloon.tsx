import React, { useState } from "react";
import "./balloon.scss";
import "./confetti.tsx";
import Confetti from "./confetti";

interface IProps {
  isPop: boolean;
  onClick: any;
}

const Balloon = (props: IProps) => {
  return (
    <div className={`balloon ${props.isPop ? "popped" : ""}`}>
      <span className="its-a-girl">{props.isPop ? "It's A Girl!" : ""}</span>
      <span >{props.isPop ? <Confetti /> : ""}</span>
      <div
        className={`balloon-to-pop ${props.isPop ? "popped" : ""}`}
        onClick={props.onClick}
      >
        <span className="text">
          {props.isPop ? "" : "He or She? Pop To See!"}
        </span>
        
      </div>
    </div>
  );
};

export default Balloon;
