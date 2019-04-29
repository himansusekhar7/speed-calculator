import React from 'react';
import CalculatorPanel from './components/CalculatorPanel';
import HistoryPanelContainer from './containers/HistoryPanelContainer';

function App() {
  return (
    <div className="main-app">
      <CalculatorPanel />
      <HistoryPanelContainer />
    </div>
  );
}

export default App;
