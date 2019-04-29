import { SAVE_DATA } from '../actions';

const initialState = {
  speedList: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === SAVE_DATA) {
    return Object.assign({}, state, {
      speedList: state.speedList.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;