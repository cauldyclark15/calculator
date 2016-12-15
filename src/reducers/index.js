import {combineReducers} from 'redux';

const initialState = {
    expressionString: '',
    answer: '0',
    firstNum: 0,
    secondNum: '',
    operation: '',
    toOperation: true,
    toAnswer: false,
    toDecimal: true
};

const displayCurrentNum = (current, digit) => {
    if (current !== '0') {
        return current + digit;
    }
    return digit;
};

const getFirstNum = (firstNum, digit, toOperation) => {
    if (toOperation) {
        return firstNum + parseInt(digit, 10);
    }
    return firstNum;
};

const CalcuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_DIGIT':
            return Object.assign({}, state, {
                answer: displayCurrentNum(state.answer, action.digit),
                firstNum: getFirstNum(state.firstNum, action.digit, state.toOperation)
            });
        default:
            return state;
    }
};

const calculatorReducer = combineReducers({CalcuReducer});

export default calculatorReducer;