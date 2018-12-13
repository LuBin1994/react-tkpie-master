import React from 'react';
import ReactDOM from 'react-dom';
import '@/static/sass/common.scss';
import '@/static/sass/global.css';
import Router from './router/router.js';
import {Provider} from 'react-redux';
import Store from '@/redux/store'
import registerServiceWorker from '@/registerServiceWorker';
ReactDOM.render(
    <Provider store={Store}>
        <Router/>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
