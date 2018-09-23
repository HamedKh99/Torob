import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import AppHeader from './src/components/Header';

export default class App extends Component {
  render() {
    I18nManager.forceRTL(true);
    return (
      <View>
        <AppHeader title="iPhone 7 128GB"/>
      </View>
    );
  }
}

