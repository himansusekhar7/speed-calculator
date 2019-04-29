import { displayFilters } from '../actions';

const calcDisplayFilter = (state = displayFilters.SHOW_LAST_FIVE, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default calcDisplayFilter;