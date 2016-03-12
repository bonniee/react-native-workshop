import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Search from '../Search';
import Definition from '../Definition';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

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

    var content = null;

    // Render different components based on route name.
    if (route.name == 'search') {
      content = (
        <Search
          onBack={back}
          onForward={forward}/>);
    }
    else if (route.name == 'definition') {
      content = (
        <Definition
          word={route.data.word}
          definition={route.data.definition}/>
        );
    }

    return (
      <View style={styles.container}>
        {content}
      </View>
      );
  },

  render() {
    return (
        <Navigator
          initialRoute={{name: 'search', index: 0}}
          renderScene={this._renderScene}
          navigationBar={
            <Navigator.NavigationBar
              style={styles.navBar}
              routeMapper={NavigationBarRouteMapper}/>
          }/>
      );
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  navBar: {
    backgroundColor: '#5599FF',
    flex: 1,
    borderWidth: 1,
    borderColor: '#3333FF'
  }
});

export default App;