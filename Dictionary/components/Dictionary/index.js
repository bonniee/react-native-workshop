import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Wordlist from '../Wordlist';
import SearchBox from '../SearchBox';

var Dictionary = React.createClass({
  getInitialState() {
    return {text: ''};
  },

  _textChanged(text) {
    this.setState({text: text});
    console.log('iiiiii');
  },

  render() {
    return (
        <View style={styles.welcome}>
          <SearchBox textChanged={this._textChanged}/>
          <Wordlist prefix={this.state.text}/>
        </View>
    );
  }
});

const styles = StyleSheet.create({
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
  }
});

export default Dictionary;