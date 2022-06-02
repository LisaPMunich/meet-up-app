Feature: User should see more or less details on an event

Scenario: An event is collapsed by default
  Given they open the app
  And a city or number of events has been selected
When a list of events is being displayed
Then the single event details are collapsed by default

Scenario: User can expand an event to see its details
Given a list of events is being displayed
When the user clicks on a "show details" button of one event
Then more details of the selected event are displayed

Scenario: User can collapse an event to hide its details
Given details of one selected event have been displayed
When the user clicks on a "hide details" button in the event details view
Then the detailed view collapses to hide the details again