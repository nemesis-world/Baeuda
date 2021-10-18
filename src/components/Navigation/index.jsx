import React, { useEffect, useState } from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import './index.scss';

const Trail = ({ open, current, setCurrent, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    opacity: open ? 1 : 0,
    translateY: open ? -20 : 0,
  });
  return (
    <div>
      {trail.map(({ ...styles }, index) => (
        <animated.li
          onClick={() => setCurrent(index)}
          key={index}
          style={styles}
        >
          {children[index]}
        </animated.li>
      ))}
    </div>
  );
};

const Navigation = ({ setCurrentNavItem }) => {
  const [open, set] = useState(false);
  const [current, setCurrent] = useState(0);

  const styles = useSpring({
    from: { opacity: open ? 0 : 1 },
    to: { opacity: open ? 1 : 0 },
  });

  useEffect(() => {
    setCurrentNavItem(current);
    set(false);
  }, [current, setCurrentNavItem]);

  return (
    <nav className={`nav ${open ? 'open' : null}`}>
      <div
        className={`nav__toggle ${open ? 'nav__toggle__open' : null}`}
        onClick={() => set((state) => !state)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <animated.div className="nav__thenavigation" style={styles}>
        <ul>
          <Trail
            open={open}
            current={current}
            setCurrent={(i) => setCurrent(i)}
          >
            <span>Random</span>
            {/* <span>Flash Card</span> */}
            <span>Cheat Sheet</span>
          </Trail>
        </ul>
      </animated.div>
    </nav>
  );
};

export default Navigation;
