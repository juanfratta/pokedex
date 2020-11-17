import React from 'react';
import "./styles.scss";

const Card = (props) => {
    console.log(props.data)
    return (
        <div className="card-container">
            <div>{props.data.name}</div>
        </div>
    );
};

export default Card;