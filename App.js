import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

class RedPotato extends Component {
  componentDidUpdate() {
    const result = this.props.navigation.getParam('result', 'failure');
    if (result !== 'failure') {
      console.log(`componentDidUpdate: ${result}`);
    }
  }

  componentDidMount() {
    const result = this.props.navigation.getParam('result', 'failure');
    console.log(`Red Mounted: ${result}`);
  }

  render() {
    return <View style={styles.red} />;
  }
}

class BluePotato extends Component {
  componentDidMount() {
    console.log('Blue Mounted');
  }

  render() {
    return <View style={styles.blue} />;
  }
}

const AppNavigator = createSwitchNavigator(
  {
    RedPotato: {
      screen: RedPotato,
      path: 'red',
    },
    BluePotato: {
      screen: BluePotato,
      path: 'blue',
    },
  },
  {
    //initialRouteName: 'BluePotato' // Fixes issue
    initialRouteName: 'RedPotato',
  },
);

const styles = StyleSheet.create({
  red: {
    flex: 1,
    backgroundColor: 'red',
  },
  blue: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

const SimpleApp = createAppContainer(AppNavigator);
const prefix = Platform.OS == 'android' ? 'potato://app/' : 'potato://';
export default (MainApp = () => <SimpleApp uriPrefix={prefix} />);
