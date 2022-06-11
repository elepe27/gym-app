import React from 'react';
import ReactDOM from 'react-dom/client';

import { GymApp } from './GymApp';

import 'popper.js'
import '../node_modules/popper.js/dist/umd/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <GymApp />
);


