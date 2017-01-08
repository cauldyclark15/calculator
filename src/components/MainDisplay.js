import React, {PropTypes} from 'react';

const MainDisplay = ({answer}) => (
    <div>
        <input id="main" type="text" value={answer} readOnly="readonly" />
    </div>
);

MainDisplay.propTypes = {
    answer: PropTypes.string.isRequired
};

export default MainDisplay;