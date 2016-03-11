import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var SearchBox = React.createClass({
  getInitialState() {
    return {
      text: ''
    };
  },

  _textChanged(text) {
    var upperCased = text.toUpperCase();
    this.setState({text: upperCased});
    this.props.textChanged(upperCased);
  },

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this._textChanged}
        value={this.state.text}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchBox;