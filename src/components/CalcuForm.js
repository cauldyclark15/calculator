import React from 'react';
import NumButtonCell from '../components/NumButtonCell';
import OpeButtonCell from '../components/OpeButtonCell';
import EquButtonCell from '../components/EquButtonCell';
import DotButtonCell from '../components/DotButtonCell';
import ClearAll from '../components/ClearAll';
import ClearEntry from '../components/ClearEntry';
import Display from '../containers/Display';
import History from '../containers/History';

const CalcuForm = () => (
    <table frameBorder={2}>
        <thead>
            <History />
            <Display />
        </thead>
        <tbody>
            <tr>
                <ClearEntry>CE</ClearEntry>
                <ClearAll>C</ClearAll>
                <OpeButtonCell>÷</OpeButtonCell>
                <OpeButtonCell>×</OpeButtonCell>
            </tr>
            <tr>
                <NumButtonCell>7</NumButtonCell>
                <NumButtonCell>8</NumButtonCell>
                <NumButtonCell>9</NumButtonCell>
                <OpeButtonCell>-</OpeButtonCell>
            </tr>
            <tr>
                <NumButtonCell>4</NumButtonCell>
                <NumButtonCell>5</NumButtonCell>
                <NumButtonCell>6</NumButtonCell>
                <OpeButtonCell>+</OpeButtonCell>
            </tr>
            <tr>
                <NumButtonCell>1</NumButtonCell>
                <NumButtonCell>2</NumButtonCell>
                <NumButtonCell>3</NumButtonCell>
                <EquButtonCell>=</EquButtonCell>
            </tr>
            <tr>
                <NumButtonCell>0</NumButtonCell>
                <DotButtonCell>.</DotButtonCell>
            </tr>
        </tbody>
    </table>
);

export default CalcuForm;