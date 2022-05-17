# Meet Up App

## Description

The Meet Up App allows users to view upcoming events for a specific city by using the Google Calendar API.
Applying the TDD approach this React App combines the concepts of serverless architecture and progressive web applications.

## User stories

As a user I should be able to filter events by city
So that I can see the list of events that take place in that city.

**As a user, I would like to be able to expand (and then again collapse) details on events so that I can get more information on an event.**

**As a user, I would like to be able to change the default number of 32 to any number of events, so that I can get a list of as many events as I have chosen.**

**As a user, I would like to use the app offline, so that I revisit the content I looked at the last time I was online.**

**As a user, I would like to see a chart when selecting a specific city, so that I know how many future events there are for the city selected.**

As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.


## Test Scenarios (using Gherkin syntax)

### FEATURE 1: USER SHOULD BE ABLE TO FILTER EVENTS BY CITY

#### Scenario 1:
Given the user hasn’t searched for any city,
When they open the app,
Then they should see a list of all upcoming events.

#### Scenario 2: 
Given the main page is open,
When the user starts typing in the city textbox,
Then they should see a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3:
Given the user was typing “Munich” in the city textbox
and the list of suggested cities is being displayed,
When the user selects a city from the list,
Then their city should be changed to that city
and the user should receive a list of upcoming events in that city.

### FEATURE 2: USER SHOULD SEE MORE/LESS DETAILS ON AN EVENT

#### Scenario 1: 
Given a city or number of events has been selected ,
When a list of events is being displayed,
Then the single event details are collapsed by default.

#### Scenario 2:
Given a list of events is being displayed,
When the user clicks on a "show details" button of one event,
Then more details of the selected event are displayed.

#### Scenario 3:
Given details of one selected event have been displayed,
When the user clicks on a "hide details" button in the event details view,
Then the detailed view collapses to hide the details again.


### FEATURE 3: USER SHOULD BE ABLE TO SPECIFY NUMBER OF EVENTS PER CITY

#### Scenario 1: 
Given the user has selected a city,
When they have not specified a number of events to be displayed,
Then the search box underneath the city textbox will contain the default value of 32.

#### Scenario 2:
Given the user has selected a city,
When they click into the search box underneath,
Then they can type in a number to specify the number of events to show.

### FEATURE 4: USER SHOULD BE ABLE TO USE THE APP WHEN OFFLINE

#### Scenario 1:
Given the user has viewed content in the app while online,
When they are offline and the data has been cached,
They can revisit this content.

#### Scenario 2:
Given the user has viewed content in the app while online,
When they are offline and change the settings for city or time range, 
They will be shown error messages.


### FEATURE 5: USER SHOULD BE ABLE TO SEE VISUALIZED DATA ON THE EVENTS

#### Scenario 1: 
Given a list of events is being displayed,
When the user clicks on a "show charts" button,
Then they will be able to see a chart visualizing either the number of events by city (bar graph) or the topics of events in all cities (cake chart).

## Technical Requirements (according to Project Brief)

The app must be a React application.
* The app must be built using the TDD technique.
* The app must use the Google Calendar API and OAuth2 authentication flow.
* The app must use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.
* The app’s code must be hosted in a Git repository on GitHub.
* The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.
* The app must display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.
* The app must pass Lighthouse’s PWA checklist.
* The app must work offline or in slow network conditions with the help of a service
worker.
* Users may be able to install the app on desktop and add the app to their home screen
on mobile.
* The app must be deployed on GitHub Pages.
* The API call must use React axios and async/await.
* The app must implement an alert system using an OOP approach to show information to
the user.
* The app must make use of data visualization (recharts preferred).
* The app must be covered by tests with a coverage rate >= 90%.
* The app must be monitored using an online monitoring tool.

