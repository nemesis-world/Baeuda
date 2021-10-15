import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { animated, useSpring } from 'react-spring';
import {
  SpaceBar,
  AudioPlayer,
  Footer,
  Helpers,
  Gradients,
} from '../../components';
import { getRandom } from '../../helpers';
import { colors } from '../../variables/colors';
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
  const [gradientsArray, setGradientsArray] = useState([
    colors[getRandom(colors)],
    colors[getRandom(colors)],
  ]);
  const [count, dispatch] = useReducer(counter, initialCount);

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const setRandomLetter = useCallback(() => {
    const randomNum = getRandom(korean);
    const randomLetter = korean[randomNum];
    setCurrentLetter(randomLetter);
    setCurrentSoundSprite(filterItems(korean, randomLetter));
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 32) {
        setRandomLetter();
        setGradientsArray([
          colors[getRandom(colors)],
          colors[getRandom(colors)],
        ]);
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
      <Gradients
        firstGradient={gradientsArray[0]}
        secondGradient={gradientsArray[1]}
      />
      <header className="header">
        <h1>
          🇰🇷 <span>배우다</span> / Baeuda
        </h1>
      </header>
      <div className="content">
        <animated.div style={styles}>
          {letter}
          <SpaceBar count={count} />
        </animated.div>
      </div>
      <Helpers />
      <Footer />
    </main>
  );
};

export default Newtab;
