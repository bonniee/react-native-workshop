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
  welcome: {
    margin: 15
  }
});

export default Dictionary;