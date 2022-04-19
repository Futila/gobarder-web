import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './services/history';

import './config/ReactotronConfig';

import MainRoutes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <MainRoutes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
