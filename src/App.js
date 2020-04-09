import React from 'react';
import Header from "./components/Header";
import MainContent from "./components/Dashboard";
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
