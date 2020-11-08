# Weather Forecast Dashboard


## Description

This sixth homework assignment was designed to be a weather forecaster, where a user could check the current weather data for an specified location, plus the 5-day forecast.


## Installation

Visit the [deployed webpage](https://highwolfx.github.io/Weather/) to view the weather dashboard online.

Otherwise, you can also choose to clone the repo onto your local machine. After cloning the repo, run the index.html file to view the website. The deployed webpage should look like [this](https://raw.githubusercontent.com/highwolfx/Weather/main/assets/welcome.png).

<p align="center">
    <img alt="welcome screen" src="https://raw.githubusercontent.com/highwolfx/Weather/main/assets/welcome.png">
</p>


## Usage

Deployed webpage can be found [here](https://highwolfx.github.io/Weather/).

The user is greeted with the [weather dashboard](https://raw.githubusercontent.com/highwolfx/Weather/main/assets/welcome.png) screen. If there were previously searched cities, they will populate the area under the "Clear City History" button.

After inputting several city names, the screen will look something similar to [this](https://raw.githubusercontent.com/highwolfx/Weather/main/assets/screenshot.png):

<p align="center">
    <img alt="Dashboard Main" src="https://raw.githubusercontent.com/highwolfx/Weather/main/assets/screenshot.png">
</p>

In the red box, cities can be inputted. If an invalid city is inputted an [error message](https://raw.githubusercontent.com/highwolfx/Weather/main/assets/error.png) will pop up prompting the user to try another valid city name. The user can either click the close button or anywhere outside of the message box to dismiss it.

In the yellow box, the "Clear City History" button clears all the cities written in the city history box.

In the green box, a history of all the cities searched will be shown. They can be clicked to show the weather conditions of the clicked city. They will be saved in the local storage of the browser upon each search, and will repopulate the area until the "Clear City History" button is pushed.

In the blue box, the currently searched city will be displayed, along with an icon of the current weather conditions. Underneath is the date of the local machine. Below that is the temperature (in Farenheit), humidity, wind speed (in mph), and UV index of the queried city.

In the purple box, the 5-day forecast of the searched city is shown, along with the date (in DD/MM/YY format), an icon showing the forecasted weather conditions, temperature (in Farenheit), and the humidity.


## License

Licensed under the [MIT license](LICENSE.txt).


## Credits

Project components are based off [Bootstrap v5](https://v5.getbootstrap.com/).

Weather API is based off of [OpenWeather API](https://openweathermap.org/) for weather and location data.

Time API is based off of [Day.js](https://day.js.org/) for accurate time keeping.