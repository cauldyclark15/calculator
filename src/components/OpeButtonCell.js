import React, {PropTypes} from 'react';

const OpeButtonCell = ({onClick, children}) => (
    <td>
        <button onClick={onClick}>
            {children}
        </button>
    </td>
);

OpeButtonCell.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default OpeButtonCell;