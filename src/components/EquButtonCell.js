import React from 'react';
import {connect} from 'react-redux';
import {getAnswer} from '../actions/action';
import {Button} from 'react-bootstrap';

let EquButtonCell = ({dispatch, children}) => (
    <Button bsStyle="default" onClick={() => {
        dispatch(getAnswer());
    }}>
        {children}
    </Button>
);

EquButtonCell = connect()(EquButtonCell);

export default EquButtonCell;