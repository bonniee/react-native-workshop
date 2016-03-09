import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Dictionary from './components/Dictionary';

class App extends Component {
  render() {
    return (
        <Dictionary/>
    );
  }
}

AppRegistry.registerComponent('Dictionary3', () => App);
