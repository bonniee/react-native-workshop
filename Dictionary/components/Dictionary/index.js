import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Wordlist from '../Wordlist';
import SearchBox from '../SearchBox';

class Dictionary extends Component {
  render() {
    return (
        <View style={styles.welcome}>
          <SearchBox/>
          <Wordlist/>
        </View>
    );
  }
}

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

export default Dictionary;