import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

var Dictionary = require('../../data/english.json');
var Words = Object.keys(Dictionary).slice(0,500).sort();

var SearchableWordlist = React.createClass({
  getDefaultProps() {
    return {
      prefix: '',
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  },

  render() {
    var filteredWords = Words.filter((w) => w.startsWith(this.props.prefix));
    return (
      <WordList dataSource={this.props.ds.cloneWithRows(filteredWords)}/>
      );
  }
});

var WordList = React.createClass({
  _renderRow(data) {
    return (
      <View key={data}>
        <Text>{data}: {Dictionary[data]}</Text>
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

export default SearchableWordlist;