# Work-Day-Scheduler


## Description

This fifth homework assignment was designed to be a task scheduler that allows a user to store their tasks that need to be done throughout the day. It can be used to log tasks that need to be done daily on an hourly time slot. As the time passes during the day, the rows will change color depending on what the time is.


## Installation

Visit the [deployed webpage](https://highwolfx.github.io/Work-Day-Scheduler/) to view the scheduler online.

Otherwise, you can also choose to clone the repo onto your local machine. After cloning the repo, run the index.html file to view the website. The deployed webpage should look like [this](https://raw.githubusercontent.com/highwolfx/Work-Day-Scheduler/main/assets/welcome.jpg).

<p align="center">
    <img alt="welcome screen" src="https://raw.githubusercontent.com/highwolfx/Work-Day-Scheduler/main/assets/welcome.jpg">
</p>


## Usage

Deployed webpage can be found [here](https://highwolfx.github.io/Work-Day-Scheduler/).

The user is greeted with the [task scheduler](https://raw.githubusercontent.com/highwolfx/Work-Day-Scheduler/main/assets/screenshot.png) screen.

<p align="center">
    <img alt="Intro screen" src="https://raw.githubusercontent.com/highwolfx/Work-Day-Scheduler/main/assets/screenshot.png">
</p>

In the orange box, the current time and date is displayed, formatted as hour:minute:seconds AM/PM, and the date as day of the week, day-month-year.

In the red box, the "Clear All Saved Tasks" button clears all the tasks written in the task boxes AND the saved tasks.

In the blue box, the hour of the work day is shown. When the row is grey, that means that the hour has already passed. When the row is red, that is the current hour. When the row is green, that means that the time has not occured yet.

In the green box, the task that wants to be saved can be typed in the corresponding time row. Once the task content has been filled out, the save button of the corresponding row (the button shown in the purple box) should be pressed to save the task to local storage so it can be loaded later on. Once the task has been saved, it will stay even when the page is reloaded, until it is cleared from local storage via the "Clear All Saved Tasks" button, or the local storage has been cleared.


## License

Licensed under the [MIT license](LICENSE.txt).


## Credits

Project components are based off [Bootstrap v5](https://v5.getbootstrap.com/).

Thanks to [w3schools](https://www.w3schools.com/) for information on how to write and modify code.

Time API is based off of [Day.js](https://day.js.org/) for accurate time keeping.

Original reference code were provided by the [UCSD Coding Bootcamp](https://bootcamp.extension.ucsd.edu/coding/).