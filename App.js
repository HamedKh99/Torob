import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import MainContainer from './src/containers/MainContainer';

export default class App extends Component {
  render() {
    I18nManager.forceRTL(true);
    return (
      <MainContainer/>
    );
  }
}

