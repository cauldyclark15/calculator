import React, {PropTypes} from 'react';

const MainDisplay = ({answer}) => (
    <tr>
        <td colSpan={4}>
            <input type="text" value={answer} readOnly="readonly" />
        </td>
    </tr>
);

MainDisplay.propTypes = {
    answer: PropTypes.string.isRequired
};

export default MainDisplay;