import React from 'react';
import {connect} from 'react-redux';
import {inputOperation} from '../actions/action';
import {Button} from 'react-bootstrap';

let OpeButtonCell = ({dispatch, children}) => (
    <Button bsStyle="default" onClick={() => {
        dispatch(inputOperation(children));
    }}>
        {children}
    </Button>
);

OpeButtonCell = connect()(OpeButtonCell);

export default OpeButtonCell;