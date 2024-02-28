import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.scss';
import { Root } from './Root';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
  <ParallaxProvider>
    <React.StrictMode>
      <Router>
        <Root /> 
      </Router>
    </React.StrictMode>
  </ParallaxProvider>
);
