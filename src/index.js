import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//ReactDOM.render(<App />,document.querySelector('#root'));

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);
