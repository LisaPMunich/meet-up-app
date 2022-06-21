# Meet Up App (pwa)



<img src="https://user-images.githubusercontent.com/99111208/173640689-d651fe51-aae6-4c2f-a0dc-c7275bab29e2.png"  height="300" width="450">

<img src="https://user-images.githubusercontent.com/99111208/173641288-94fc2160-bdb7-4f09-a629-84c56a2a3558.png"  height="300">


## Description

The Meet Up App allows users to view upcoming frontend meet-ups worldwide and to filter them by location and number of events.
This is a fully-tested **serverless progressive web application (pwa)** using a test-driven development approach (**TDD**). It reaches near **>90% code coverage**.

An **OOP** approach is applied to create alerts for users (including an offline alert via service worker).
An external Meetup API is used to fetch the events. **OAuth2** Authentication is handled with Google API and authorization using **AWS Lambda**.
The app also includes a **visualization of events** by city in a graph (via **chart.js** library).


### use it live

<table>
<tr>
<td>
<img src="https://user-images.githubusercontent.com/99111208/163397361-5126a0ff-a116-4a57-9773-c1878285b045.svg" alt="Heroku icon" width="30">
</td>
<td>
<a href="https://meet-up-app-2022.herokuapp.com/">Click here to see my live page on Heroku</a>
</td>
</tr>
</table>

## Issues I would like to improve given time

- [ ] install ESLint
- [ ] improve performance 
  - tackling issues highlighted in Lighthouse
  - by making use of already implemented local storage (caching)
- [ ] add a build that checks test coverage and lints
- [ ] accessibility improvement (by installing "tota11y")
- [ ] convert class components to functional components
- [ ] increase test coverage


## Implemented Technical Requirements, Features and Scenarios

### Technical Requirements
* works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
* displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
* users may be able to install the app on homescreen and add the app to their home screen on mobile.
* works offline or in slow network conditions with the help of a service
  worker.


### Features and Scenarios used for TDD approach
- [x] **I. User can filter events by city**
  - Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.
  - Scenario 2: User should see a list of suggestions when they search for a city.
  - Scenario 3: User can select a city from the suggested list.
- [x] **II. User should see more/less details on an event**
  - Scenario 1: An event element is collapsed by default
  - Scenario 2: User can expand an event to see its details
  - Scenario 3: User can collapse an event to hide its details
- [x] **III. User should be able to specify number of events per city**
    - Scenario 1: When user has not specified a number, 32 is the default number
    - Scenario 2: User can change the number of events they want to see
- [x] **IV. User should be able to use the app when offline**
    - Scenario 1: Show cached data when there's no internet connection
    - Scenario 2: Show offline alert when user interacts with the app while offline
- [x] **V. User should be able to see visualized data on the events**
    - Scenario 1: Show a scatter chart with the number of upcoming events in each city
    - Scenario 2: Show a pie chart with the topics of events in all cities


## Details from Project Implementation (User stories, Gherkin Scenarios)

<details>
  <summary>Click to expand!</summary>

## User stories
1. **As a user I should be able to filter events by city
   So that I can see the list of events that take place in that city.**

2. **As a user, I would like to be able to expand (and then again collapse) details on events so that I can get more information on an event.**

3. **As a user, I would like to be able to change the default number of 32 to any number of events, so that I can get a list of as many events as I have chosen.**

4. **As a user, I would like to use the app offline, so that I revisit the content I looked at the last time I was online.**

5. **As a user, I would like to see a chart when selecting a specific city, so that I know how many future events there are for the city selected.**

6. **As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.**

## Example Testing Features and Scenarios (used for Gherkin)

**Feature: User should see more or less details on an event**

**Scenario: An event is collapsed by default**
Given they open the app
And a city or number of events has been selected
When a list of events is being displayed
Then the single event details are collapsed by default

**Scenario: User can expand an event to see its details**
Given a list of events is being displayed
When the user clicks on a "show details" button of one event
Then more details of the selected event are displayed

**Scenario: User can collapse an event to hide its details**
Given details of one selected event have been displayed
When the user clicks on a "hide details" button in the event details view
Then the detailed view collapses to hide the details again

</details>


## Reports from Testing and Monitoring

<details>
  <summary>Click to expand!</summary>

## Online Monitoring, status: 2022-06-05

Please be aware, that this is a performance report conducted on the deployed GitHub page. In the meantime I had to deploy the page to heroku, because GitHub was having an internal bug with deployment updated files.

<img alt="Report Atatus and Lighthouse" src="https://user-images.githubusercontent.com/99111208/173822836-dddedfcc-b0f1-411d-a98b-98e7ac1819aa.png" width="550">

## Testing (Jest, Enzyme, React testing library), status 2022-05-25

<img alt="Screenshot_4 3_unittest_jest_coverage" src="https://user-images.githubusercontent.com/99111208/173823673-32cd4c90-535b-44aa-89e7-72806755d053.png" width="550">

## Qualification as pwa according to Lighthouse checklist

<img src="https://user-images.githubusercontent.com/99111208/173639393-1a170c7f-e403-42bc-ad12-695a10a2dbf1.png" alt="Lighthouse Report" width="550">

</details>


## Project Dependencies
<img src="https://user-images.githubusercontent.com/99111208/174773596-16529a2d-de29-4d9c-bb42-27396920e88c.png" alt="Production Dependencies">
<br>
<img src="https://user-images.githubusercontent.com/99111208/174773580-398e07b3-68b5-419c-bc42-c5bd32129e05.png" alt="Dev Dependencies">

## What did I learn?

[currently working on it...]


