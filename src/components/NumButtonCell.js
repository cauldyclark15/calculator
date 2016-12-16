import React from 'react';
import {connect} from 'react-redux';
import {inputDigit} from '../actions/action';

let NumButtonCell = ({dispatch, children}) => (
    <td>
        <button onClick={() => {
            dispatch(inputDigit(children));
        }}>
            {children}
        </button>
    </td>
);

NumButtonCell = connect()(NumButtonCell);

export default NumButtonCell;

