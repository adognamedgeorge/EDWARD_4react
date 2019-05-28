import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './components/Hello.jsx'
import Hello2 from './components/Hello2.jsx'

ReactDOM.render(<div>
    <Hello name='edward' age={20}></Hello>
    <App></App>
    <Hello2 name='Edward'></Hello2>
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
