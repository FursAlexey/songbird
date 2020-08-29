import React, { useState } from 'react';
import { random } from 'lodash';
import './App.scss';
import logo from './images/svg/logo.svg';

import Categories from './components/Categories/Categories';
import Question from './components/Question/Question';
import AnswerList from './components/AnswerList/AnswerList';
import BirdCard from './components/BirdCard/BirdCard';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

import getBirdsByCategory from './resources/getBirdsByCategory';
import EndGame from './components/EndGame/EndGame';

function App() {
  const [score, setScore] = useState(0);
  const [scoreForQuestion, setScoreForQuestion] = useState(5);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [category, setCategory] = useState(0);
  const [birdList, setBirdList] = useState(getBirdsByCategory(category));
  const [birdForGuess, setBirdForGuess] = useState(birdList[random(5)]);
  const [selectedBird, setSelectedBird] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const newLevel = () => {
    const birdListByCategory = getBirdsByCategory(category);
    setBirdList(birdListByCategory);
    setBirdForGuess(birdListByCategory[random(5)]);
    setScoreForQuestion(5);
    setSelectedAnswers(['', '', '', '', '', '']);
    setIsCorrectAnswerSelected(false);
    setSelectedBird(null);
  };

  const newGame = () => {
    newLevel();
    setScore(0);
    setCurrentQuestionNumber(1);
    setIsGameOver(false);
  };

  const handleSetCategory = (selectedCategory) => {
    newGame();
    setCategory(selectedCategory);
  };

  const handleSelectedAnswer = (index) => {
    if (!isCorrectAnswerSelected) {
      if (
        birdList[index].name.toLowerCase() === birdForGuess.name.toLowerCase()
      ) {
        setSelectedAnswers(
          selectedAnswers.map((item, i) => (index === i ? 'correct' : item))
        );
        setIsCorrectAnswerSelected(true);
        setScore(score + scoreForQuestion);
        setSelectedBird(birdList[index]);
      } else {
        setSelectedAnswers(
          selectedAnswers.map((item, i) => (index === i ? 'incorrect' : item))
        );
        setScoreForQuestion(scoreForQuestion - 1);
        setSelectedBird(birdList[index]);
      }
    }

    setSelectedBird(birdList[index]);
  };

  const handleClickNextLevel = () => {
    newLevel();
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    if (currentQuestionNumber === 5) {
      setIsGameOver(true);
    }
  };

  return isGameOver ? (
    <EndGame score={score} playNewGame={newGame} />
  ) : (
    <div className="App">
      <header>
        <div className="logo-score">
          <img src={logo} width="200" alt="song_bird" />
          <h5>Вопрос: {currentQuestionNumber} из 5</h5>
          <h5>Счет: {score}</h5>
        </div>
        <Categories
          selectedCategory={category}
          setSelectedCategory={handleSetCategory}
        />
      </header>
      <main>
        <Question
          isCorrectAnswerSelected={isCorrectAnswerSelected}
          birdForGuess={birdForGuess}
        />
        <AnswerList
          birdList={birdList}
          isCorrectAnswerSelected={isCorrectAnswerSelected}
          birdForGuess={birdForGuess}
          selectedAnswers={selectedAnswers}
          setSelectedAnswer={handleSelectedAnswer}
        />
        <BirdCard selectedBird={selectedBird} />
      </main>
      <footer>
        <NextLevelButton
          isActive={isCorrectAnswerSelected}
          goToNextLevel={handleClickNextLevel}
        />
      </footer>
    </div>
  );
}

export default App;
