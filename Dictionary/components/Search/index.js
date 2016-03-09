import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Wordlist from '../Wordlist';
import SearchBox from './SearchBox';

var Search = React.createClass({
  getInitialState() {
    return {text: ''};
  },

  _textChanged(text) {
    this.setState({text: text});
  },

  _wordPressed(data) {
    this.props.onForward('definition', data);
  },

  render() {
    return (
        <View style={styles.welcome}>
          <SearchBox textChanged={this._textChanged}/>
          <Wordlist
            prefix={this.state.text}
            onWordPress={this._wordPressed}/>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  welcome: {
    margin: 15
  },
  container: {
    marginTop: 40,
    flex: 1
  }
});

export default Search;