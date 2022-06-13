import React, {Component} from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import NavBar from './components/NavBar';
import {extractLocations, getEvents, checkToken, getAccessToken} from './components/api';
import './styling/nprogress.css';
import {OfflineAlert} from "./components/Alert";
import WelcomeScreen from './components/WelcomeScreen';

class App extends Component {
    state = {
        events: [],
        locations: [],
        showWelcomeScreen: true,
        eventCount: 32,
        offlineAlertText: "",
    }

    async componentDidMount() {
        this.mounted = true;

        /**
         * If localhost => Show Event List with mock entries
         * If offline => SHow Event List with Cached Entries
         * If logged in
         *  - Hide Welcome Screen
         *  - Fetch Events
         *  - Show Event List
         * Else (Not local, not offline, not logged in) => Welcome Screen
         */
        const isLocalhost = window.location.href.startsWith('http://localhost');
        const isOffline = !navigator.onLine;

        if(isLocalhost){
            this.hideWelcomeScreen();

            this.fetchAndShowEvents();
        } else if(isOffline){
            this.setState({
                offlineAlertText: 'You are offline. The displayed event list may not be up to date.'
            });
            this.hideWelcomeScreen();
            this.fetchAndShowEvents();
        } else {
            const accessToken = localStorage.getItem('access_token');
            const isLoggedIn = !(await checkToken(accessToken)).error;
            const searchParams = new URLSearchParams(window.location.search);
            const code = searchParams.get("code");

            if(isLoggedIn || code){
                this.hideWelcomeScreen();
                this.fetchAndShowEvents();
            } else {
                this.setState({
                    showWelcomeScreen: true,
                });
            }
        }

        // ---

        // if (!(navigator.onLine && !window.location.href.startsWith('http://localhost'))) {
        //
        // }
        //
        // if (navigator.onLine && !window.location.href.startsWith('http://localhost')) {
        //
        //     const accessToken = localStorage.getItem('access_token');
        //     const isTokenValid = !(await checkToken(accessToken)).error;
        //     const searchParams = new URLSearchParams(window.location.search);
        //     const code = searchParams.get("code");
        //
        //     if (code || isTokenValid) {
        //         this.setState({
        //             showWelcomeScreen: false
        //         });
        //     }
        // }
        //
        // getEvents().then((events) => {
        //     if (this.mounted) {
        //         this.setState({
        //             events,
        //             locations: extractLocations(events),
        //             offlineAlertText: 'You are offline. The displayed event list may not be up to date.',
        //             showWelcomeScreen: false
        //         });
        //     }
        // });

    }

    hideWelcomeScreen() {
        this.setState({
            showWelcomeScreen: false,
        })
    }

    fetchAndShowEvents() {
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({
                    events,
                    locations: extractLocations(events),
                });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false
    }

    updateEvents = (location, eventCount) => {
        getEvents().then((events) => {
            const locationEvents = (location === 'all') ? events :
                events.filter((event) =>
                    event.location === location);
            this.setState({
                events: locationEvents,
            });
        });
    }

    updateCount = (eventCount) => {
        this.setState({
            eventCount: Number(eventCount),
        })
    }

    render() {
        const limitedEvents = this.state.events.slice(0, this.state.eventCount);

        return (
            <div className="App">
                <NavBar/>
                <main>

                    <div className="input-wrapper">
                        <OfflineAlert
                            className="offline-alert"
                            text={this.state.offlineAlertText}/>
                        <CitySearch
                            locations={this.state.locations}
                            updateEvents={this.updateEvents}
                            className="city-search"
                        />
                        <NumberOfEvents
                            className="number-of-events"
                            onChange={this.updateCount}
                            eventCount={this.state.eventCount}
                        />
                    </div>

                    <EventList
                        className="event-list"
                        events={limitedEvents}
                    />
                </main>
                <WelcomeScreen
                    showWelcomeScreen={this.state.showWelcomeScreen}
                    getAccessToken={() => {
                        getAccessToken()
                    }}
                />
            </div>
        );
    }
}

export default App;
