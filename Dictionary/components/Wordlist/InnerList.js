import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
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
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this._renderRow}/>
    );
  }
});

const styles = StyleSheet.create({
  container: {
  }
});

export default WordList;
