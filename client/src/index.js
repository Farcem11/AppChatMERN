import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore();

ReactDOM.render(
    <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,     
    document.getElementById('root')
);
serviceWorker.register();
