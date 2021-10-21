import React, { useState } from 'react';
import { animated, useSpring, Transition } from 'react-spring';
import { AudioPlayer } from '..';
import './index.scss';

import { korean } from '../../assets/alphabet/korean.js';

const navElements = ['Consonants', 'Vowels', 'Consonant assimilation'];

const getAlphabet = (array, type) => {
  return array
    .filter((word) => word.type === type)
    .map((item, index) => {
      return (
        <AudioPlayer
          current={item}
          audioSprite={item.sound.time}
          keyPlaying={false}
          element={<span className="grid__item">{item.letter}</span>}
          key={index}
        />
      );
    });
};

const CheatSheet = () => {
  const [currentAlphabet, setCurrentAlphabet] = useState(0);
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const theNav = navElements.map((item, index) => {
    return (
      <li
        key={index}
        className={currentAlphabet === index ? 'selected' : null}
        onClick={() => setCurrentAlphabet(index)}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      <main className="cheatsheet">
        <Transition
          items={currentAlphabet}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          delay={0}
        >
          {(styles, item) => (
            <animated.div style={styles}>
              <section className={`grid ${item === 2 ? 'grid__extend' : null}`}>
                {item === 0 ? (
                  <>
                    {getAlphabet(korean, 'consonants')}{' '}
                    {getAlphabet(korean, 'addconsonants')}
                  </>
                ) : null}
                {item === 1 ? (
                  <>
                    {getAlphabet(korean, 'vowels')}{' '}
                    {getAlphabet(korean, 'addvowels')}
                  </>
                ) : null}
                {item === 2 ? (
                  <>
                    <div className="no__actions">
                      <span className="grid__item">{''}</span>
                      {getAlphabet(korean, 'consonants')}
                    </div>
                    <div class="grid__col no__actions">
                      {getAlphabet(korean, 'vowels')}
                    </div>
                    <div class="grid__col">{getAlphabet(korean, 'cag')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'can')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cad')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'car')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cam')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cab')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cas')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cang')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'caj')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cach')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cak')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cat')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cap')}</div>
                    <div class="grid__col">{getAlphabet(korean, 'cah')}</div>
                  </>
                ) : null}
              </section>
            </animated.div>
          )}
        </Transition>
      </main>
      <animated.div style={styles}>
        <nav className="cheatsheet__nav">
          <ul>{theNav}</ul>
        </nav>
      </animated.div>
    </>
  );
};

export default CheatSheet;
