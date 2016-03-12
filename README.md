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

![Mondrian](Tutorial/components/Mondrian/screenshots/mondrian-02.png)

## Weather app

We're going to build a simple weather app. It will take user input for the zip code via a `<TextInput/>`, query the OpenWeatherMap API to get the forecast, and then display the resulting forecast.

Create a blank file, and follow along as we build the Weather app together!

### TextInput

Add a component to take input, wire up the callback and state changes so that it displays.

```
<TextInput
  onSubmitEditing={this._handleTextChange}/>
```

### Making an API Call

Use the `fetch` API to get the weather.

```
fetch('http://api.openweathermap.org/data/2.5/weather?q='
  + zip + '&units=imperial&APPID=' + API_KEY)
  .then((response) => response.json())
  .then((responseJSON) => {
    console.log(responseJSON);
  })
```

### Style the app

Change the styles of the Weather app as you like!
