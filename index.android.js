import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import getAppContainer from './src/main'

export default class emmos extends Component {

  render() {
    return getAppContainer('android')
  }
}


AppRegistry.registerComponent('emmos', () => emmos);
