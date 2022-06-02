Feature: User should be able to specify number of events per city

Scenario: When user hasn't specified a number, 32 is the default number
Given the user has selected a city
When they have not specified a number of events to be displayed
Then the search box next to the city textbox will contain the default value of 32.

Scenario: User can change the number of events they want to see
Given the user has selected a city
When they click into the number of events box next to the city search box
And they can type in a number to specify the number of events to show
Then the event list is reduced to the specified number.