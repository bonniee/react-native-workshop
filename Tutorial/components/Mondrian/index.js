import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

var styles = require('./style');

var Mondrian = React.createClass({
  render: function() {
    return (
      <View style={styles.parent}>
        <View style={styles.topBlock}>
          <View style={styles.leftCol}>
            <View style={[styles.cellOne, styles.base]}>
              <Text>One</Text>
            </View>
            <View style={[styles.cellTwo, styles.base]}>
              <Text>Two</Text>
            </View>
          </View>
          <View style={[styles.cellThree, styles.base]}>
            <Text>Three</Text>
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}>
            <Text>Four</Text>
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <Text>Five</Text>
          </View>
          <View style={styles.bottomRight}>
            <View style={[styles.cellSix, styles.base]}>
              <Text>Six</Text>
            </View>
            <View style={[styles.cellSeven, styles.base]}>
              <Text>Seven</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

module.exports = Mondrian;