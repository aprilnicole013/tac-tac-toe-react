import React from 'react';


const Square = ({value, onClick}) => (
    <div>
        <button onClick={onClick}>
        {value}
        </button>
    </div>
)

export default Square