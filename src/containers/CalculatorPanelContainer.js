import { connect } from 'react-redux';
import CalculatorPanel from '../components/CalculatorPanel';
import { saveData } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  saveData: speedDetail => dispatch(saveData(speedDetail))
});

const CalculatorPanelContainer = connect(null, mapDispatchToProps) (CalculatorPanel);

export default CalculatorPanelContainer;