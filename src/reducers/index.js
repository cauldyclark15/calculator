import {combineReducers} from 'redux';

const initialState = {
    history: '',
    answer: '0',
    firstNum: 0,
    secondNum: 0,
    operation: '',
    toOperation: true,
    toAnswer: false,
    toDecimal: true
};

const displayAnswer = (current, digit) => {
    if (current !== '0') {
        return current + digit;
    }
    return digit;
};

const getNum = () => {

};

const CalcuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_DIGIT':
            if (!state.toOperation) {
                return Object.assign({}, state, {
                    answer: state.secondNum === 0 ? action.digit : displayAnswer(state.answer, action.digit),
                    secondNum: state.secondNum.toString() + action.digit
                });
            }
            return Object.assign({}, state, {
                answer: displayAnswer(state.answer, action.digit),
                firstNum: state.firstNum.toString()
            });
        case 'INPUT_OPERATION':
            if (!state.toOperation) {
                return state;
            }
            return Object.assign({}, state, {
                history: state.answer + ' ' + action.operation,
                toOperation: !state.toOperation
            });
        default:
            return state;
    }
};

const calculatorReducer = combineReducers({CalcuReducer});

export default calculatorReducer;