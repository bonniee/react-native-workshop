var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var Forecast = require('./forecast');
var styles = require('./finished_styles');
var API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';

var WeatherProject = React.createClass({
  getInitialState: function() {
    return {
      zip: '',
      forecast: null
    };
  },

  _handleTextChange: function(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=imperial&APPID=' + API_KEY)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  render: function() {
    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast 
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
    }
    return (
      <View style={styles.container}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current weather for 
             </Text>
             <View style={styles.zipContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={this._handleTextChange}/>
             </View>
           </View>
           {content}
         </View>
      </View>
    );
  }
});

module.exports = WeatherProject;