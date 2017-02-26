/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import FirstPage from './components/firstPage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ReactNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
            initialRoute={FirstPage.route()}
            renderScene={this.renderScene}
            style={styles.navigator} />
      </View>
    );
  }

  renderScene = (route, navigator) => {
    return React.createElement(route.component, {navigator: navigator});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navigator: {
    flex: 1,
    height: windowHeight,
    width: windowWidth
  },
});

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
