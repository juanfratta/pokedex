import React from "react";
import "./style.scss";

const Button = ({ children }) => {
  return (
    <div className='button-container'>
      <button>{children}</button>
    </div>
  );
};

export default Button;
