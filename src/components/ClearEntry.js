import React from 'react';
import {connect} from 'react-redux';
import {clearEntry} from '../actions/action';
import {Button} from 'react-bootstrap';

let CEButtonCell = ({dispatch, children}) => (
    <Button bsStyle="danger" onClick={() => {
        dispatch(clearEntry());
    }}>
        {children}
    </Button>
);

CEButtonCell = connect()(CEButtonCell);

export default CEButtonCell;