import React from 'react';

import './config/ReactotronConfig';

import MainRoutes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <MainRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
