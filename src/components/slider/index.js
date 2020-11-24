import React from "react";
import "./styles.scss";

const Slider = (props) => {
  const { name, percentage } = props;
  return (
    <div className="slider-container">
      <p>{`${name}: ${percentage}`}</p>
      <div className="slider-fullbar">
        <div
          className="slider-percentage"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
