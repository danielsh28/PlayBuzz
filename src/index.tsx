import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./StoreConfig";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './theme';

const store = configureStore();
export let deferredPrompt :any;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    </ThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


