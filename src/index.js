import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

const index = (
    <JssProvider generateClassName={generateClassName}>
    <Index />
</JssProvider>
)

ReactDOM.render(index, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
