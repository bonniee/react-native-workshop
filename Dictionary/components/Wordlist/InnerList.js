import React, {
  Component,
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
          <Text>{data.word}: {data.definition}</Text>
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
    height: height - 100
  }
});

export default WordList;
