import React from 'react';
import './styles.scss'

const Paginate = (props) => {
    const {getPrevPage, getNextPage } = props
     return (
        <div className="paginate-container">
            <button onClick={getPrevPage}>Prev</button>
            <button onClick={getNextPage}>Next</button>
        </div>
    );
};

export default Paginate;