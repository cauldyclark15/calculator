// action creators

export const inputDigit = (digit) => ({
    type: 'INPUT_DIGIT',
    digit
});

export const inputOperation = (operation) => ({
    type: 'INPUT_OPERATION',
    operation
});

export const getAnswer = () => ({
    type: 'GET_ANSWER'
});

export const putDecimalPoint = (dot) => ({
    type: 'PUT_DECIMAL_POINT',
    dot
});

export const clearEntry = () => ({
    type: 'CLEAR_ENTRY'
});

export const clearAll = () => ({
    type: 'CLEAR_ALL'
});