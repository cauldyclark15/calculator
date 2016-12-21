import React, {PropTypes} from 'react';

const HistoryDisplay = ({history}) => (
    <div>
        <input type="text" value={history} readOnly="readonly" />
    </div>
);

HistoryDisplay.propTypes = {
    history: PropTypes.string.isRequired
};

export default HistoryDisplay;