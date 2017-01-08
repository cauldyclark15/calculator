import React from 'react';
import {connect} from 'react-redux';
import {clearAll} from '../actions/action';
import {Button} from 'react-bootstrap';

let CLButtonCell = ({dispatch, children}) => (
    <Button bsStyle="danger" onClick={() => {
        dispatch(clearAll());
    }}>
        {children}
    </Button>
);

CLButtonCell = connect()(CLButtonCell);

export default CLButtonCell;