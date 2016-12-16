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

const getNum = (prev, currStr) => {
    let curr = parseFloat(currStr);
    if (prev === 0 && curr === 0) {
        return 0;
    }
    return parseFloat(prev.toString() + curr.toString());
};

const CalcuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_DIGIT':
            if (!state.toOperation) {
                return Object.assign({}, state, {
                    answer: state.secondNum === 0 ? action.digit : displayAnswer(state.answer, action.digit),
                    secondNum: getNum(state.secondNum, action.digit),
                    toOperation: state.toOperation ? state.toOperation : !state.toOperation,
                    toAnswer: state.toAnswer ? state.toAnswer : !state.toAnswer
                });
            }
            return Object.assign({}, state, {
                answer: state.firstNum === 0 ? action.digit : displayAnswer(state.answer, action.digit),
                firstNum: getNum(state.firstNum, action.digit)
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