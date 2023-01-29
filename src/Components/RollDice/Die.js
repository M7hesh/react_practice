import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Die.css";
const Die = (props) => {
  const { face, rolling } = props;

  // Using font awesome icon to show
  // the exactnumber of dots
  return (
    <div>
      <FontAwesomeIcon
        icon={["fas", `fa-dice-${face}`]}
        className={`Die 
                ${rolling && "Die-shaking"}`}
      />
    </div>
  );
};

export default Die;
