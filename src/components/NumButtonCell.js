import React, {PropTypes} from 'react';

const NumButtonCell = ({onClick, children}) => (
    <td>
        <button onClick={onClick}>
            {children}
        </button>
    </td>
);

NumButtonCell.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default NumButtonCell;

