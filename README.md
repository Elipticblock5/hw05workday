## Process notes on getting project running
1) Made project, started, and cloned from starter code

2) Found bootstrap grid from documentation, got one row of grid started and formatted, used a past 12pm of military style time  to avoid same number problem after 12 pm.  copied down additional rows once working for other rows. Needed to append CSS variables as mine were slightly different.

3) Got format from Moment js documentation for time display, figured out had to assign variable and grab html tag to append with moment.js function after a few tries

4) added jQuery on click function from jQuery docs on jQuery website for saving scheduled items

5) worked with TA during office hours on 03/06 for function help, idea to loop over time to find 3 states needed, time=now is red, color already in CSS, time=past is grey already in css, any other is green, color in css starter code already.  Past, present, future states in starter code. 

6) made else, else if function for those, jQuery to append html to CSS tagged colors in starter code, was not working initially and coloring wrong grid area debugged with TA in office hours on 03/07.

7) worked with TA during office hours on 03/07 for html to js class and id help. was not appending correct html blocks. I needed corrections to html ids and classes to assist with js function. Was initially coloring only time area,  once I added sibling to function to color textarea, it worked. 

8) made final changes and published to GitHub





## Project Criteria below

# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the [Moment.js](https://momentjs.com/) library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality since Moment.js is considered a "legacy" project. Learn more about these other solutions in the [Moment.js project status page.](https://momentjs.com/docs/#/-project-status/)

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/img/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
