import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import InnerWordList from './InnerList';
import Dictionary from '../../data/english.json';

var Words = Object.keys(Dictionary).slice(0,500).sort();

var SearchableWordlist = React.createClass({
  getDefaultProps() {
    return {
      prefix: '',
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.word !== r2.word
      })
    };
  },

  render() {
    var filteredWords = Words.filter((w) => w.startsWith(this.props.prefix));
    var wordsWithDefinitions = filteredWords.map((w) => {
      return {word: w, definition: Dictionary[w]}
    });

    return (
      <InnerWordList
        dataSource={this.props.ds.cloneWithRows(wordsWithDefinitions)}/>
      );
  }
});

const styles = StyleSheet.create({
  container: {
  }
});

export default SearchableWordlist;