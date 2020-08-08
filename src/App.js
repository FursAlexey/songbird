import React, { useState } from 'react';
import './App.scss';

import Navigation from './components/Navigation';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logo_score">
          <img src="./svg/logo.svg" width="200" alt="song_bird"/>
          <h5>Score: {score}</h5>
        </div>
        <Navigation />
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
