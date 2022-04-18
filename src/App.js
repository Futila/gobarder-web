import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import history from './services/history';

import './config/ReactotronConfig';

import MainRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
