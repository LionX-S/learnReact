import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './02_class+ts/01.state';
// import App from './02_class+ts/03.抽屉';
// import App from './03_function+ts/1.state';
// import App from './03_function+ts/2.props';
// import App from './04_路由/App';
import App from './05_redux/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
