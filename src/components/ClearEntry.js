import React from 'react';
import {connect} from 'react-redux';
import {clearEntry} from '../actions/action';

let CEButtonCell = ({dispatch, children}) => (
    <td>
        <button onClick={() => {
            dispatch(clearEntry());
        }}>
            {children}
        </button>
    </td>
);

CEButtonCell = connect()(CEButtonCell);

export default CEButtonCell;