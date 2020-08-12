import React, { useState } from 'react';
import './App.scss';

import Navigation from './components/Navigation';
import Question from './components/Question/Question';
import AnswerList from './components/AnswerList/AnswerList';
import BirdCard from './components/BirdCard/BirdCard';

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
        <Question />
        <AnswerList />
        <BirdCard />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
