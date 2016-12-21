import React from 'react';
import {connect} from 'react-redux';
import {putDecimalPoint} from '../actions/action';
import {Button} from 'react-bootstrap';

let DotButtonCell = ({dispatch, children}) => (
    <Button bsStyle="default" onClick={() => {
        dispatch(putDecimalPoint(children));
    }}>
        {children}
    </Button>
);

DotButtonCell = connect()(DotButtonCell);

export default DotButtonCell;