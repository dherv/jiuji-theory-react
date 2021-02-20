import './App.css';
import 'destyle.css';
import React, { FC } from 'react';
import GlobalStyle from './styled/global';
import Router from './router/Router';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
