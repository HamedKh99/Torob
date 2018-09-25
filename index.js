/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import TorobApp from './src/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(TorobApp, applyMiddleware(thunk));

const Container = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Container);
