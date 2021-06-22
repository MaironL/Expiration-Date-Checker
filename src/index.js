import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import { AppProvider } from './context';

//Importing the principal component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
