import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

var WeatherProject = React.createClass({
  getInitialState() {
    return ({
      zip: ''
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
    }
});

module.exports = WeatherProject;
