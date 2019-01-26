import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AuthProvider } from './components';
import { SnackbarProvider } from 'notistack';
import App from './App';

ReactDOM.render((
  <SnackbarProvider
    maxSnack={3}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </SnackbarProvider>
), document.getElementById('root'));