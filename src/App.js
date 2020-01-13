import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import './config/reactotron';
import { persistor, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
