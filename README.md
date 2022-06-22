# Meet Up App (PWA)



<img src="https://user-images.githubusercontent.com/99111208/173640689-d651fe51-aae6-4c2f-a0dc-c7275bab29e2.png" width="600">


<img src="https://user-images.githubusercontent.com/99111208/175063158-4bc83802-0506-45b6-a2d8-c313d7a2474c.png" width="300">
<img src="https://user-images.githubusercontent.com/99111208/175062588-ff330423-e6d6-4c05-a071-70840dccb7da.png" width="300">


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
<a href="https://meet-up-app-2022.herokuapp.com/">Click here to see my live page on Heroku </a>
</td>
</tr>
</table>
[currently being verified by Google]

## Issues I would like to improve given time

- [ ] install ESLint
- [ ] improve performance 
  - tackling issues highlighted in Lighthouse
  - by making use of already implemented local storage (caching)
- [ ] add a build that checks test coverage and lints
- [ ] accessibility improvement (by installing "tota11y")
- [ ] convert class components to functional components
- [ ] increase test coverage
- [ ] add a search box to search for event topics


## Implemented Technical Requirements, Features and Scenarios

### Technical Requirements
* works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera as well as on IE11, although it had end of life recently.
* displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
* users may be able to install the app on homescreen and add the app to their home screen on mobile.
* works offline or in slow network conditions with the help of a service
  worker.


### Features
| Done | Feature|
|------|--------|
|✅| User can filter events by city|
|✅| User should see more/less details on an event|
|✅| User should be able to specify number of events per city|
|✅| User should be able to use the app when offline|
|✅| User should be able to see visualized data on the events|


### Details from Project Implementation using a TDD approach (user stories, Gherkin scenarios)

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

<details>
  <summary>Click to expand!</summary>

### production dependencies

<img src="https://user-images.githubusercontent.com/99111208/174773596-16529a2d-de29-4d9c-bb42-27396920e88c.png" alt="Production Dependencies">
<br>

### dev dependencies

<img src="https://user-images.githubusercontent.com/99111208/174773580-398e07b3-68b5-419c-bc42-c5bd32129e05.png" alt="Dev Dependencies">

</details>

## What did I learn?

### ... in general
- The website codedec is very helpful in general because you can search in GitHub repositories and find examples of code that might fit your own use case and setup. This page helped me find out, [how to get the value of an input field in puppeteer](https://codedec.com/tutorials/how-to-get-element-value-in-puppeteer/)

### ... from working with React
- The issue with React being a library is that it is not a full-fledged framework like Angular. Ever since using the latest React version, 18, I ran into dependency issues very often.

### ... from doing monitoring with Atatus and Lighthouse

I compared the metrics from Atatus to the results from the Chrome browser monitoring tool Lighthouse. As a performance monitoring tool built directly into the browser, Lighthouse is much faster than Atatus, which is only loaded after all JavaScript files have been loaded. To improve that, Atatus should be placed in a separate file, that is loaded before the index.js. For the report I conducted, the metrics calculated by Lighthouse have a higher reliability. It would be interesting to see the results from NewRelic when deployed to Heroku, since it is a popular monitoring tool.

### ... from deployment to first GitHub, then Heroku
- **Challenge:** GitHub stopped deploying my most recent files, so that I could not work on the Welcome Screen and the offline mode. So I opened a ticket to GitHub, described the problem, send a SHA and would have waited two days.... hadn't I been so impatient to continue with the project.
So I deployed my app to heroku instead. I revisited all the nice authentication and verification steps I had loved so much the first time I did it.
and then heroku brought about problems of its own.... I was getting errors about an enzyme library I was using. Then the service worker did not register (and I got no offline-mode), because heroku was always working in development mode and not doing a build when I deployed.

- **Solution:** I got around that by installing a heroku buildpack for create-React-app.

- **Side note for future projects:** Unfortunately I just learned that the underlying static web server buildpack is deprecated and will not be supported on Heroku-22 or newer stacks. So the buildpack will soon stop working and it is suggested to look into using Next.js or Remix to develop React apps which are deployable using the Node.js buildpack. (https://github.com/mars/create-react-app-buildpack)

### ... from Testing
- **End-to-end testing:** 
  - **Challenge:** After refactoring the code of the feature ‘show/hide an event detail’ to include beforeAll() and afterAll() I got the error: "You are trying to import a file after the Jest environment has been torn down."
  - **Solution**: Only reverting the code to not use beforeAll() and afterAll() solved this error. I tried out all approaches from stackoverflow to solve this error (including adding a jest.config.js file, alternatively adding configurations for jest in the package.json), but the error remained. So in case I run into the same error in the future, I will know that this not so perfect solution at least works.
- **Unit-testing:**
  - **Challenge:** Using Enzyme with react 18 caused problems measured by tons of console.errors, because enzyme uses the pre-18 react API.
  - **Solution:** The documentation suggests to use react-testing-library instead.
  
### ... from authentication and verification
- **OAuth2 on Google Cloud Platform**: Proof of ownership is no longer required for push subscription URL domains. You do not need to upload it to glenzy.github.io 3 to verify. You simply download the html file and paste it into the public folder.
- **Domain verification on Google Cloud Platform:**
  - You do not need to upload it to glenzy.github.io 3 to verify anymore. You simply download the html file and paste it into the public folder.
  - Further information: https://support.google.com/cloud/answer/9110914#exceptions-ver-reqts&zippy=%2Cexceptions-to-verification-requirements 
  - I also changed the credentials in the handler.js:
  redirect_uris: ["meet-up-app-2022.herokuapp.com/"],
  javascript_origins: ["meet-up-app-2022.herokuapp.com", "localhost:3000"],

### ... from making the App a PWA (configure serviceWorker and manifest.json)
- **Challenge:** As described in the create-react-app documentation https://create-react-app.dev/docs/making-a-progressive-web-app/ I tried to opt-in to the offline-first behavior I changed serviceWorker.unregister() to 
```
serviceWorker.register()
```
in the src/index.js file. That did not work.

- **Solution:** Instead - as already suggested in the Create React App template - I then erased the import of serviceWorker as well as serviceWorker.register(), because (as Lighthouse told me), there is no register function in service-worker.js.

  So what works is:
  ```
  import * as serviceWorkerRegistration from './serviceWorkerRegistration';
  ...
  serviceWorkerRegistration.register();
  ```

- Also, I added the following to the manifest.json, to make it a PWA:
  ```
  “prefer_related_applications”: false
  ```
  
### ... from creating charts

- **Challenge:** I originally wanted to use recharts.js to create a scatter chart and a pie chart, but that did not work, because of me using react 18. See the following error: 
```
ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: meet@0.1.0
npm ERR! Found: react@18.1.0
npm ERR! node_modules/react
npm ERR! react@"^18.1.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.0.0 || ^17.0.0" from recharts@2.1.10
npm ERR! node_modules/recharts
```
- The reason: recharts - currently - only works with react 16 or 17. I could have added **--legacy-peer-deps** to the end of the install command ... but that would just have been a temporary fix and probably have led to other problems along the way.
- **Solution:** So I did some research on popular chart libraries for react on npm trends and openbase (https://openbase.com/categories/js/best-react-chart-libraries) and decided to use react chart.js instead, because chart.js can be used with several frameworks and I will be able to apply my learnings to future projects as well.
