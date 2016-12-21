import React from 'react';
import {connect} from 'react-redux';
import {inputDigit} from '../actions/action';
import {Button} from 'react-bootstrap';

let NumButtonCell = ({dispatch, children}) => (
    <Button bsStyle="default" onClick={() => {
        dispatch(inputDigit(children));
    }}>
        {children}
    </Button>
);

NumButtonCell = connect()(NumButtonCell);

export default NumButtonCell;

