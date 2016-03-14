var React = require('react-native');
var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  parent: {
    backgroundColor: '#DDDDDD',
    borderColor: '#666666',
    borderWidth: 5,
    marginTop: 30,
  },
  child: {
    borderColor: '#AA00AA',
    borderWidth: 2,
    fontSize: 18,
    margin: 2,
    padding: 10,
  },
  childOne: {
    backgroundColor: '#FFFFCC'
  },
  childTwo: {
    backgroundColor: '#FFCCFF'
  },
  childThree: {
    backgroundColor: '#CCFFFF'
  }
});

module.exports = styles;