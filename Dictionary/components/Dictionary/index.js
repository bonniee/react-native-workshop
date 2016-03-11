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

var NavBar = React.createClass({
  render() {
    return (
      <View style={styles.navBar}>
        <Text>Some awesome</Text>
      </View>
      );
  }
});

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (<TouchableHighlight  style={{marginTop: 30}} onPress={() => {
      if (index > 0) {
        navigator.pop();
      }
    }}>
      <Text>Back</Text>
    </TouchableHighlight>
  )
  },
    
  RightButton: function(route, navigator, index, navState) {
    return null;
  },
    
  Title: function(route, navigator, index, navState) {
    return (
      <Text>
        Tralalala
      </Text>
    );
  },
}

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
        <Search
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
          renderScene={this._renderScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}/>
            }/>
      </View>
      );
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  },
  navBar: {
    backgroundColor: '#FF0000',
    height: 50,
    flex: 1,
    width: 100
  }
});

export default App;