import { connect } from 'react-redux';
import HistoryPanel from '../components/HistoryPanel';

const getLastFiveList = (speedList) => {
  return speedList.reverse().filter((item, index) => index < 5);
}

const mapStateToProps = state => ({
  speedList: getLastFiveList(state.speedList)
});


const HistoryPanelContainer = connect(mapStateToProps) (HistoryPanel);

export default HistoryPanelContainer;