import {combineReducers} from 'redux';

const initialState = {
    history: '',
    answer: '0',
    previous: 0,
    operation: '',
    toOperation: true,
    toDecimal: true,
    equalPressed: false,
};

const displayAnswer = (current, digit) => {
    if (current !== '0') {
        return current + digit;
    }
    return digit;
};

const getNum = (prev, currStr) => {
    let curr = parseFloat(currStr);
    if (prev === 0 && curr === 0) {
        return 0;
    }
    return parseFloat(prev.toString() + curr.toString());
};

const getAnswer = (num1, num2, operation) => {
    switch (operation) {
        case '÷':
            return num1 / num2;
        case '×':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '+':
            return num1 + num2;
        default:
            return 0;
    }
};

const CalcuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_DIGIT':
            if (state.equalPressed) {
                return Object.assign({}, state, {
                    answer: action.digit,
                    previous: getNum(0, action.digit),
                    equalPressed: !state.equalPressed
                });
            }
            return Object.assign({}, state, {
                answer: !state.toOperation ? action.digit : displayAnswer(state.answer, action.digit),
                toOperation: true
            });
        case 'INPUT_OPERATION':
            if (!state.toOperation) {
                return state;
            }
            if (!!state.answer && !!state.previous) {
                return Object.assign({}, state, {
                    history: state.history + ' ' + state.answer + ' ' + action.operation,
                    answer: getAnswer(state.previous, parseFloat(state.answer), state.operation).toString(),
                    toOperation: state.toOperation ? !state.toOperation : state.toOperation,
                    previous: getAnswer(state.previous, parseFloat(state.answer), state.operation),
                    operation: action.operation,
                    equalPressed: false,
                });
            }
            return Object.assign({}, state, {
                history: parseFloat(state.answer).toString() + ' ' + action.operation,
                toOperation: state.toOperation ? !state.toOperation : state.toOperation,
                operation: action.operation,
                previous: parseFloat(state.answer),
                equalPressed: false,
            });
        case 'GET_ANSWER':
            return Object.assign({}, state, {
                history: '',
                answer: getAnswer(state.previous, parseFloat(state.answer), state.operation).toString(),
                previous: 0,
                operation: '',
                toOperation: state.toOperation ? state.toOperation : !state.toOperation,
                equalPressed: state.equalPressed ? state.equalPressed : !state.equalPressed,
            });
        case 'PUT_DECIMAL_POINT':
            if (!state.toDecimal) {
                return state;
            }
            return Object.assign({}, state, {
                answer: state.answer + action.dot,
                toDecimal: !state.toDecimal,
            });
        default:
            return state;
    }
};

const calculatorReducer = combineReducers({CalcuReducer});

export default calculatorReducer;