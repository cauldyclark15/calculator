import {connect} from 'react-redux';
import {inputDigit} from '../actions/action';
import CalcuForm from '../components/CalcuForm';

const mapStateToProps = (state) => {
    return {
        answer: state.CalcuReducer.answer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (digit) => {
            dispatch(inputDigit(digit));
        }
    };
};

const Numbers = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalcuForm);

export default Numbers;