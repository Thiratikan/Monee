import React from "react";
import { Style } from "../styles/TimelineStyle";

function Timeline() {
  return (
    <Style>
      <div>
        <img src="/images/piggy-bank.jpg" alt="" />
        <div className="text">
          <p>
            <span>&#10003;</span> Easy Tracking Money
          </p>
          <p>
            <span>&#10003;</span> Planning Budget
          </p>
        </div>
      </div>
    </Style>
  );
}

export default Timeline;
