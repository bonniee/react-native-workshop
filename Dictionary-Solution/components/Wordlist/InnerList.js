import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

var WordList = React.createClass({
  _renderRow(data) {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress(data)}>
        <View key={data.word}>
          <Text style={styles.word}>{data.word}</Text>
        </View>
      </TouchableHighlight>
      );
  },

  render() {
    return (
      <View style={styles.listContainer}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this._renderRow}/>
      </View>
    );
  }
});

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    height: height - 180
  },
  word: {
    padding: 2
  }
});

export default WordList;
