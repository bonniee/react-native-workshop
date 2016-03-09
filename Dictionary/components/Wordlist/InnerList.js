import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

var WordList = React.createClass({
  _renderRow(data) {
    return (
      <View key={data.word}>
        <Text>{data.word}: {data.definition}</Text>
      </View>
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