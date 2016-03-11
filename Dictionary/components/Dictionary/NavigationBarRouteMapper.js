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
      <TouchableHighlight onPress={onPress}>
        <Text>Back</Text>
      </TouchableHighlight>
      );
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
};

export default NavigationBarRouteMapper;