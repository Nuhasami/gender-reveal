import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Balloon from './balloon/balloon'

function App() {
  const [isBalloonPopped, setIsBalloonPopped] = useState(false);
  const isPopped = () => {
    setIsBalloonPopped(!isBalloonPopped);
  }
  return (
    <div className="App">
      <Balloon isPop={isBalloonPopped} onClick={() => isPopped()}/>
    </div>
  );
}

export default App;
