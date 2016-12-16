import React, {PropTypes} from 'react';

const HistoryDisplay = ({history}) => (
    <tr>
        <td colSpan={4}>
            <input type="text" value={history} readOnly="readonly" />
        </td>
    </tr>
);

HistoryDisplay.propTypes = {
    history: PropTypes.string.isRequired
};

export default HistoryDisplay;