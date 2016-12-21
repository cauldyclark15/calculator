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
            if (state.answer === 'Infinity') {
                return state;
            }
            if (state.equalPressed) {
                return Object.assign({}, state, {
                    answer: action.digit,
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
                if (state.operation === '÷' && state.answer === '0') {
                    return Object.assign({}, initialState, {
                        answer: 'Infinity',
                        toOperation: false,
                        toDecimal: false,
                    });
                }
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
            if (state.answer === 'Infinity' || state.previous === 0) {
                return state;
            }
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
        case 'CLEAR_ENTRY':
            if (state.answer === 'Infinity' || !state.toOperation) {
                return state;
            }
            return Object.assign({}, state, {
                answer: state.answer.length === 1 ? '0' : state.answer.slice(0, state.answer.length - 1)
            });
        case 'CLEAR_ALL':
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
};

const calculatorReducer = combineReducers({CalcuReducer});

export default calculatorReducer;