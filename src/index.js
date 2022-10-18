import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from 'react-redux'; //' import Provider(like a component)\
import store from './store/index';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App store={store}/>
        {/* //'wrap App⬆️ with Provider set the value of store to out exported file of index.js */}
    </Provider>,
);
