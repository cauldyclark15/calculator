import {connect} from 'react-redux';
import HistoryDisplay from '../components/HistoryDisplay';

const mapStateToProps = (state) => ({
    history: state.CalcuReducer.history
});

const History = connect(mapStateToProps)(HistoryDisplay);

export default History;