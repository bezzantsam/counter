//import react  from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,} from 'react-router';

import { App } from './components/App';
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );