import React, { useState } from 'react';
import { animated, useSpring, Transition } from 'react-spring';
import './index.scss';

import { korean } from '../../assets/alphabet/korean.js';

const navElements = ['Consonants', 'Vowels', 'Consonant assimilation'];

const getAlphabet = (array, type) => {
  return array
    .filter((word) => word.type === type)
    .map((item, index) => {
      return (
        <span className="grid__item" key={index}>
          {item.letter}
        </span>
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
              <section className="grid">
                {item === 0 ? getAlphabet(korean, 'consonants') : null}
                {item === 1 ? getAlphabet(korean, 'vowels') : null}
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
