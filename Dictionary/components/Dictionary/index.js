import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Wordlist from '../Wordlist';
import SearchBox from '../SearchBox';
import Definition from '../Definition';

var Dictionary = React.createClass({
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

var App = React.createClass({
  _renderScene(route, navigator) {
    var back = () => {
      if (route.index > 0) {
        navigator.pop();
      }
    }
    var forward = (sceneName, data) => {
      navigator.push({
        name: sceneName,
        data: data,
        index: route.index + 1
      });
    }
    if (route.name == 'search') {
      return (
        <Dictionary
          onBack={back}
          onForward={forward}/>);
    }
    else if (route.name == 'definition') {
      return (
        <Definition word={route.data.word} definition={route.data.definition}/>
        );
    }
    else {
      console.error('Unknown scene!');
      return null;
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'search', index: 0}}
          renderScene={this._renderScene}/>
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

export default App;