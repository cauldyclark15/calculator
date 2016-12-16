import React from 'react';
import {connect} from 'react-redux';
import {getAnswer} from '../actions/action';

let EquButtonCell = ({dispatch, children}) => (
    <td>
        <button onClick={() => {
            dispatch(getAnswer());
        }}>
            {children}
        </button>
    </td>
);

EquButtonCell = connect()(EquButtonCell);

export default EquButtonCell;