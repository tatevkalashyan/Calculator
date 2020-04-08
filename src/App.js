import React from 'react';
import Header from "./components/header/header";
import MainContent from "./components/main-content/content";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
