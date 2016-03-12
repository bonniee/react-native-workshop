import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var Definition = React.createClass({
  render() {
    return (
      <View>
        <Text style={styles.word}>
          {this.props.word}
        </Text>
        <Text style={styles.definition}>
          {this.props.definition}
        </Text>
      </View>
      );
  }
});

const styles = StyleSheet.create({
  word: {
    fontWeight: 'bold'
  },
  definition: {
    fontWeight: 'normal'
  }
});

export default Definition;