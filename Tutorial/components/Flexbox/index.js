var React = require('react-native');
var {
  Text,
  View,
} = React;

var styles = require('./styles');

var FlexDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.parent}>
        <Text style={[styles.child, styles.childOne]}>
          Child One
        </Text>
        <Text style={[styles.child, styles.childTwo]}>
          Child Two
        </Text>
        <Text style={[styles.child, styles.childThree]}>
          Child Three
        </Text>  
      </View>
    );
  }
});

module.exports = FlexDemo;
