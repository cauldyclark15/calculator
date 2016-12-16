import React from 'react';
import {connect} from 'react-redux';
import {putDecimalPoint} from '../actions/action';

let DotButtonCell = ({dispatch, children}) => (
    <td>
        <button onClick={() => {
            dispatch(putDecimalPoint(children));
        }}>
            {children}
        </button>
    </td>
);

DotButtonCell = connect()(DotButtonCell);

export default DotButtonCell;