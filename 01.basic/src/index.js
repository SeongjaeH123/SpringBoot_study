import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// React.StrictMode는 개발단계에서 내부에 문제가 발생할만한 요소가 있는지 검사하는 기능이다.
//  개발모드에서는 활성화되지만 실제 배포되는(빌드)단계에는 비활성화된다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
