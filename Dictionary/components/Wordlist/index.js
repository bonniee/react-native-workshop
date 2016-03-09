import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

var Dictionary = require('../../data/english.json');

var WordList = React.createClass({
  getDefaultProps() {
    var words = Object.keys(Dict).slice(0,5).sort();
    return {
      words: words
    };
  },

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {dataSource: ds.cloneWithRows(this.props.words)};
  },

  _renderRow(data) {
    console.log(this.props.prefix);
    if (!data.startsWith(this.props.prefix)) {
      return null;
    }
    return (
      <View key={data}>
        <Text>{data}: {Dict[data]}</Text>
      </View>
      );
  },

  render() {
    console.log(this.props.words[0]);
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}/>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default WordList;