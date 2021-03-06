# react-native-workshop
Like it says on the tin.

## Instructions

Open the Tutorial project.

### Flexbox

Let's get some flexbox practice!

- Edit the `app.js` file so that it's using the Mondrian component, e.g.

```
module.exports = Mondrian;
```

- Edit the `components/Mondrian/styles.js` file, until it looks like:

<img src="Tutorial/components/Mondrian/screenshots/mondrian-02.png" width="250px"/>

## Weather app

We're going to build a simple weather app. It will take user input for the zip code via a `<TextInput/>`, query the OpenWeatherMap API to get the forecast, and then display the resulting forecast.

Create a blank file, and follow along as we build the Weather app together!

### TextInput

Add a component to take input, wire up the callback and state changes so that it displays.

```
<TextInput
  onSubmitEditing={this._handleTextChange}/>
```

*Hint*: use the debugger to examine the event object passed to the callback.

### Making an API Call

Use the `fetch` API to get the weather.

```
var API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
```

```
fetch('http://api.openweathermap.org/data/2.5/weather?q='
  + zip + '&units=imperial&APPID=' + API_KEY)
  .then((response) => response.json())
  .then((responseJSON) => {
    console.log(responseJSON);
  })
```

### Add an image background

Try adding a background image to the app!

```
<Image
  resizeMode='cover'
  source={{uri: 'http://www.photographymad.com/files/images/purple-flowers.jpg'}}>
  // Your content here...
</Image>
```

### Style the app

Change the styles of the Weather app as you like!

