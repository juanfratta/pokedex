import React from "react";
import "./styles.scss";

const Paginate = (props) => {
  const { getPrevPage, getNextPage } = props;
  return (
    <div className="paginate-container">
      <i className="arrow left" onClick={getPrevPage} />
      <i className="arrow right" onClick={getNextPage} />
    </div>
  );
};

export default Paginate;
