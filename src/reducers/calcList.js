const calcList = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return [
        ...state,
        {
          distance: action.distance,
          time: action.time
        }
      ];
    default:
      return state;
  }
};

export default calcList;