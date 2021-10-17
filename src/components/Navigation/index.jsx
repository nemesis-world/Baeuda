import React, { useState } from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import './index.scss';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    opacity: open ? 1 : 0,
    translateY: open ? -20 : 0,
  });
  return (
    <div>
      {trail.map(({ ...styles }, index) => (
        <animated.ul key={index} style={styles}>
          {children[index]}
        </animated.ul>
      ))}
    </div>
  );
};

const Navigation = () => {
  const [open, set] = useState(false);

  const styles = useSpring({
    from: { opacity: open ? 0 : 1 },
    to: { opacity: open ? 1 : 0 },
  });

  return (
    <nav className="nav">
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
        <Trail open={open}>
          <li>Random</li>
          <li>Flash Card</li>
          <li>Cheat Sheet</li>
        </Trail>
      </animated.div>
    </nav>
  );
};

export default Navigation;
