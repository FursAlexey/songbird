import React, {useEffect, useState} from 'react';
import { random } from 'lodash';
import './App.scss';

import Categories from './components/Categories/Categories';
import Question from './components/Question/Question';
import AnswerList from './components/AnswerList/AnswerList';
import BirdCard from './components/BirdCard/BirdCard';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

import getBirdsByCategory from './resources/getBirdsByCategory';

function App() {
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState(0);
  const [birdList, setBirdList] = useState([]);
  const [birdForGuess, setBirdForGuess] = useState(null);
  const [selectedBird, setSelectedBird] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState(['', '', '', '', '', '']);
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

  useEffect(() => {
    const birdsArr = getBirdsByCategory(category);
    setBirdList(birdsArr);
    setBirdForGuess(birdsArr[random(5)]);
  }, [category]);

  const handleSetCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedAnswers(['', '', '', '', '', '']);
  }

  const handleSelectedAnswer = (index) => {
    if (!isCorrectAnswerSelected) {
      if (birdList[index].name.toLowerCase() === birdForGuess.name.toLowerCase()) {
        setSelectedAnswers(selectedAnswers.map((item, i) => ((index === i) ? 'correct' : item)));
        setIsCorrectAnswerSelected(true);
      } else {
        setSelectedAnswers(selectedAnswers.map((item, i) => ((index === i) ? 'incorrect' : item)));
      }
    }

    setSelectedBird(birdList[index]);
  }

  return (
    <div className="App">
      <header>
        <div className="logo_score">
          <img src="./svg/logo.svg" width="200" alt="song_bird"/>
          <h5>Score: {score}</h5>
        </div>
        <Categories
          selectedCategory={category}
          setCategory={handleSetCategory}
        />
      </header>
      <main>
        <Question />
        <AnswerList
          birdList={birdList}
          isCorrectAnswerSelected={isCorrectAnswerSelected}
          birdForGuess={birdForGuess}
          selectedAnswers={selectedAnswers}
          setSelectedAnswer={handleSelectedAnswer}
        />
        <BirdCard
          selectedBird={selectedBird}
        />
      </main>
      <footer>
        <NextLevelButton />
      </footer>
    </div>
  );
}

export default App;
