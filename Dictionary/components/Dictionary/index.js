import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Dictionary from '../Search';
import Definition from '../Definition';

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

    // Render different components based on route name.
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
  container: {
    marginTop: 40,
    flex: 1
  }
});

export default App;