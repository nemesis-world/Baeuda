import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';

render(<Newtab />, window.document.querySelector('#app'));

if (module.hot) module.hot.accept();
