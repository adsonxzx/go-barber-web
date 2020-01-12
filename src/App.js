import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import './config/reactotron';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
