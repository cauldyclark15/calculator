import {combineReducers} from 'redux';

const initialState = {
    history: '',
    answer: '0',
    firstNum: 0,
    secondNum: 0,
    operation: '',
    toOperation: true,
    toAnswer: false,
    toDecimal: true,
    toSecondNum: false,
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
                    firstNum: getNum(0, action.digit),
                    equalPressed: !state.equalPressed
                });
            }
            return Object.assign({}, state, {
                answer: state.firstNum === 0 ? action.digit : displayAnswer(state.answer, action.digit),
            });
        case 'INPUT_OPERATION':
            if (!state.toOperation) {
                return state;
            }
            if (state.toAnswer) {
                if (state.secondNum === 0 && state.operation === '÷') {
                    return Object.assign({}, initialState, {
                        answer: 'Error'
                    });
                }
                return Object.assign({}, state, {
                    history: state.history + ' ' + state.answer + ' ' + action.operation,
                    answer: getAnswer(state.firstNum, parseFloat(state.answer), state.operation).toString(),
                    toOperation: state.toOperation ? !state.toOperation : state.toOperation,
                    toAnswer: !state.toAnswer,
                    firstNum: getAnswer(state.firstNum, parseFloat(state.answer), state.operation),
                    operation: action.operation
                });
            }
            return Object.assign({}, state, {
                history: state.answer + ' ' + action.operation,
                toOperation: state.toOperation ? !state.toOperation : state.toOperation,
                operation: action.operation,
                firstNum: parseFloat(state.answer),
            });
        case 'GET_ANSWER':
            return Object.assign({}, state, {
                history: '',
                answer: getAnswer(state.firstNum, state.secondNum, state.operation).toString(),
                firstNum: getAnswer(state.firstNum, state.secondNum, state.operation),
                operation: '',
                toOperation: state.toOperation ? state.toOperation : !state.toOperation,
                toAnswer: false,
                equalPressed: state.equalPressed ? state.equalPressed : !state.equalPressed,
            });
        case 'PUT_DECIMAL_POINT':
            if (!state.toDecimal) {
                return state;
            }
            return Object.assign({}, state, {
                answer: state.firstNum.toString() + action.dot,
                toDecimal: !state.toDecimal,
            });
        default:
            return state;
    }
};

const calculatorReducer = combineReducers({CalcuReducer});

export default calculatorReducer;