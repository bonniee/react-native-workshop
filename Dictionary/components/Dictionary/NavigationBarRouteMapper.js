import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index <= 0) {
      return null;
    }

    var onPress = () => {
      if (index > 0) {
        navigator.pop();
      }
    }

    return (
      <TouchableHighlight
        onPress={onPress}
        style={[styles.button, styles.navItem]}>
        <Text>Back</Text>
      </TouchableHighlight>
      );
  },
    
  RightButton: function(route, navigator, index, navState) {
    return null;
  },
    
  Title: function(route, navigator, index, navState) {
    return (
      <View style={[styles.title, styles.navItem]}>
        <Text>DICTIONARY</Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  navItem: {
    flex: 1,
    padding: 5
  },
  button: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    marginLeft: 10
  }
});

export default NavigationBarRouteMapper;