import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { SpaceBar, AudioPlayer, Footer, Helpers } from '../../components';
import { korean } from '../../assets/alphabet/korean';
import './Newtab.css';
import './Newtab.scss';

function counter(state) {
  state += 1;
  return state;
}

const filterItems = (arr, query) => {
  return arr.filter((el) => el.sound.file === query.sound.file);
};

const Newtab = () => {
  let letter;
  const initialCount = 0;
  const [currentLetter, setCurrentLetter] = useState(null);
  const [currentSoundSprite, setCurrentSoundSprite] = useState([]);
  const [count, dispatch] = useReducer(counter, initialCount);

  const setRandomLetter = useCallback(() => {
    const randomNum = Math.floor(Math.random() * korean.length);
    const randomLetter = korean[randomNum];
    setCurrentLetter(randomLetter);
    setCurrentSoundSprite(filterItems(korean, randomLetter));
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 32) {
        setRandomLetter();
        dispatch();
      }
    },
    [setRandomLetter]
  );

  useEffect(() => {
    setRandomLetter();
  }, [setRandomLetter]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (currentLetter) {
    letter = (
      <div className="letter">
        <div className="letter__block">
          <h2 className="letter__korean">{currentLetter.letter}</h2>
          <hr />
          <span className="letter__phonetic">{currentLetter.phonetic}</span>
        </div>
        {currentLetter.sound && (
          <div className="letter__helper">
            <AudioPlayer
              current={currentLetter}
              audioSprite={currentSoundSprite}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <main className="app">
      <div className="gradient"></div>
      <div className="gradient gradient--right"></div>
      <header className="header">
        <h1>
          🇰🇷 <span>배우다</span> / Baeuda
        </h1>
      </header>
      <div className="content">
        {letter}
        <SpaceBar count={count} />
      </div>
      <Helpers />
      <Footer />
    </main>
  );
};

export default Newtab;
