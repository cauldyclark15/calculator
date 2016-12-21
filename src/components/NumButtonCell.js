import React from 'react';
import {connect} from 'react-redux';
import {inputDigit} from '../actions/action';
//import {Button} from 'react-bootstrap';

let NumButtonCell = ({dispatch, children}) => (
    <td>
        <button className="btn btn-primary btn-sm" onClick={() => {
            dispatch(inputDigit(children));
        }}>
            {children}
        </button>
    </td>
);

NumButtonCell = connect()(NumButtonCell);

export default NumButtonCell;

