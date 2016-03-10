import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var Definition = React.createClass({
  render() {
    return (
      <View>
        <Text>{this.props.word}</Text>
        <Text>{this.props.definition}</Text>
      </View>
      );
  }
});

const styles = StyleSheet.create({
  container: {
  }
});

export default Definition;