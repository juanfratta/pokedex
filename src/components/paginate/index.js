import React from 'react';

const Paginate = (props) => {
    const {getPrevPage, getNextPage } = props
     return (
        <div>
            <button onClick={getPrevPage}>Prev</button>
            <button onClick={getNextPage}>Next</button>
        </div>
    );
};

export default Paginate;