import React from 'react';
import {connect} from 'react-redux';
import {clearAll} from '../actions/action';

let CLButtonCell = ({dispatch, children}) => (
    <td>
        <button onClick={() => {
            dispatch(clearAll());
        }}>
            {children}
        </button>
    </td>
);

CLButtonCell = connect()(CLButtonCell);

export default CLButtonCell;