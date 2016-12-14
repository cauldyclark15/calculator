import React from 'react';

const NumButtonCell = ({onClick, children}) => (
    <td>
        <button
            onClick={onClick} 
        >
        {children}
        </button>
    </td>
);

export default NumButtonCell;