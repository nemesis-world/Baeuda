import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { animated, useSpring } from 'react-spring';
import { SpaceBar, AudioPlayer, Gradients } from '../../components';
import { getRandom } from '../../helpers';
import { colors } from '../../variables/colors';
import { korean } from '../../assets/alphabet/korean';
import { waveform } from '../../assets/assets';
import './index.scss';

function counter(state) {
  state += 1;
  return state;
}

const filterItems = (arr, query) => {
  return arr.filter((el) => el.sound.file === query.sound.file);
};

const Randomizer = () => {
  let letter;
  const initialCount = 0;
  const [currentLetter, setCurrentLetter] = useState(null);
  const [currentSoundSprite, setCurrentSoundSprite] = useState([]);
  const [count, dispatch] = useReducer(counter, initialCount);
  const [gradientsArray, setGradientsArray] = useState([
    colors[getRandom(colors)],
    colors[getRandom(colors)],
  ]);

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
              element={<img alt="Press me!" src={waveform} />}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Gradients
        firstGradient={gradientsArray[0]}
        secondGradient={gradientsArray[1]}
      />
      <animated.div style={styles}>
        {letter}
        <SpaceBar count={count} />
      </animated.div>
    </>
  );
};

export default Randomizer;
