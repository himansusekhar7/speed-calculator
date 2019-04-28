import React from 'react';
import CalculatorPanel from '../components/CalculatorPanel';
import HistoryPanel from '../components/HistoryPanel';

function App() {
  return (
    <div className="main-app">
      <CalculatorPanel />
      <HistoryPanel />
    </div>
  );
}

export default App;
