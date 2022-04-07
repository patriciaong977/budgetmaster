import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css'; // For the background
import { Provider } from './context/context';

ReactDOM.render(
  <Provider> { /* Wrapped Application with Provider. */ }
      <App />
  </Provider>,
  document.getElementById('root')
);
