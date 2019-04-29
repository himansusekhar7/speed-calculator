import { combineReducers } from 'redux';
import calcList from './calcList';
import calcDisplayFilter from './calcDisplayFilter';

export default combineReducers({
  calcList,
  calcDisplayFilter
});