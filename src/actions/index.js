export const saveData = (distance, time) => ({
  type: 'SAVE_DATA',
  distance,
  time
});

export const setDisplayFilter = (filter) => ({
  type: 'SET_DISPLAY_FILTER',
  filter
});

export const displayFilters = {
  SHOW_LAST_FIVE: 'SHOW_LAST_FIVE',
  SHOW_ALL: 'SHOW_ALL'
};