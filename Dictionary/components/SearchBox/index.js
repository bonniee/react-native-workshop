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
    this.setState({text: text});
    this.props.textChanged(text);
  },
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this._textChanged}
        value={this.state.text}/>
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

export default SearchBox;