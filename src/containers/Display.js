import {connect} from 'react-redux';
import MainDisplay from '../components/MainDisplay';

const mapStateToProps = (state) => ({
    answer: state.CalcuReducer.answer
});

const Display = connect(mapStateToProps)(MainDisplay);

export default Display;