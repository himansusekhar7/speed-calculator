import React from 'react';
import CalculatorPanelContainer from './containers/CalculatorPanelContainer';
import HistoryPanelContainer from './containers/HistoryPanelContainer';

function App() {
  return (
    <div className="main-app">
      <CalculatorPanelContainer />
      <HistoryPanelContainer />
    </div>
  );
}

export default App;
