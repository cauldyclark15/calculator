import React, {PropTypes} from 'react';
import NumButtonCell from './NumButtonCell';

const CalcuForm = ({onButtonClick, answer}) => (
    <table frameBorder={2}>
        <thead>
            <tr>
                <td colSpan={4}>
                    <input type="text" value={answer} readOnly="readonly" />
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <NumButtonCell
                    onClick={() => onButtonClick('7')}
                >7</NumButtonCell>
                <NumButtonCell
                    onClick={() => onButtonClick('8')}
                >8</NumButtonCell>
                <NumButtonCell
                    onClick={() => onButtonClick('9')}
                >9</NumButtonCell>
                <NumButtonCell
                    onClick={() => onButtonClick('-')}
                >-</NumButtonCell>
            </tr>
        </tbody>
    </table>
);

CalcuForm.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired
};

export default CalcuForm;