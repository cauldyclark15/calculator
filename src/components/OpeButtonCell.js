import React from 'react';
import {connect} from 'react-redux';
import {inputOperation} from '../actions/action';

let OpeButtonCell = ({dispatch, children}) => (
    <td>
        <button onClick={() => {
            dispatch(inputOperation(children));
        }}>
            {children}
        </button>
    </td>
);

OpeButtonCell = connect()(OpeButtonCell);

export default OpeButtonCell;