import { connect } from 'react-redux';
import HistoryPanel from '../components/HistoryPanel';
import { displayFilters } from '../actions';

const getList = (calcList, filter) => {
  switch (filter) {
    case displayFilters.SHOW_LAST_FIVE:
    return calcList.reverse().filter((item, index) => index < 5);
    case displayFilters.SHOW_ALL:
    default:
      return calcList;
  }
}

const mapStateToProps = state => ({
  calcList: getList(state.calcList, state.displayFilters)
});

export default connect(
  mapStateToProps
)(HistoryPanel);