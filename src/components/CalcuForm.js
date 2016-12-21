import React from 'react';
import NumButtonCell from '../components/NumButtonCell';
import OpeButtonCell from '../components/OpeButtonCell';
import EquButtonCell from '../components/EquButtonCell';
import DotButtonCell from '../components/DotButtonCell';
import ClearAll from '../components/ClearAll';
import ClearEntry from '../components/ClearEntry';
import Display from '../containers/Display';
import History from '../containers/History';
import {ButtonToolbar} from 'react-bootstrap';

const CalcuForm = () => (
    <div>
        
        <History />
        <Display />
    
    
        <ButtonToolbar>
            <ClearEntry>CE</ClearEntry>
            <ClearAll>C</ClearAll>
            <OpeButtonCell>÷</OpeButtonCell>
            <OpeButtonCell>×</OpeButtonCell>
        </ButtonToolbar>
        <ButtonToolbar>
            <NumButtonCell>7</NumButtonCell>
            <NumButtonCell>8</NumButtonCell>
            <NumButtonCell>9</NumButtonCell>
            <OpeButtonCell>-</OpeButtonCell> 
        </ButtonToolbar>
        <ButtonToolbar>
            <NumButtonCell>4</NumButtonCell>
            <NumButtonCell>5</NumButtonCell>
            <NumButtonCell>6</NumButtonCell>
            <OpeButtonCell>+</OpeButtonCell>
        </ButtonToolbar>
        <ButtonToolbar>
            <NumButtonCell>1</NumButtonCell>
            <NumButtonCell>2</NumButtonCell>
            <NumButtonCell>3</NumButtonCell>
            <EquButtonCell>=</EquButtonCell>
        </ButtonToolbar>
        <ButtonToolbar>
            <NumButtonCell>0</NumButtonCell>
            <DotButtonCell>.</DotButtonCell>
        </ButtonToolbar>
    </div>
);

export default CalcuForm;