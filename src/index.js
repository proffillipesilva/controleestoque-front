import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './features/store';
import { Provider } from 'react-redux';
import { injectMethods, injectStore } from './shared/utils/axios-config';
import { logout } from './features/auth/auth-slice';
import { showFeedback } from './features/feedback/feedback-slice';

injectStore(store)
injectMethods(logout, showFeedback)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
