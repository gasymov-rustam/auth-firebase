import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProvideAuth } from './hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
