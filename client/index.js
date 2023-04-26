import React from 'react';
import App from './App.jsx';
// import store from './store';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client'



const root = createRoot(document.getElementById('root'))
root.render(
  <>
  <App />
  </>
  );


