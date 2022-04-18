import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './services/history';

import './config/ReactotronConfig';

import MainRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <MainRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
