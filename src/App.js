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
import ScatterChart from './components/ScatterChart';
import PieChart from './components/PieChart';


class App extends Component {
    state = {
        events: [],
        locations: [],
        showWelcomeScreen: true,
        eventCount: 32,
        offlineAlertText: "",
        showChartDetails: false,
    }

    async componentDidMount() {
        this.mounted = true;

        /**
         * If localhost => Show Event List with mock entries
         * If offline =>
         * - SHow Event List with Cached Entries
         * - hide Welcome Screen
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
                offlineAlertText: 'You are offline.'
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

    handleClick = (event) => {
        this.setState({
            showChartDetails: !this.state.showChartDetails,
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
        const buttonText = this.state.showChartDetails
            ? "Hide Charts"
            : "Show Charts";

        return (
            <div className="App">
                <NavBar/>
                <main>
                    <div className="input-wrapper">
                        <OfflineAlert
                            style={{color: "#f16775"}}
                            text={this.state.offlineAlertText}
                        />
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
                    <div className="charts-button-wrapper">
                        <button
                            onClick={this.handleClick}
                            className="charts-button">
                            {buttonText}
                        </button>
                    </div>

                    {this.state.showChartDetails && (
                        <div className="charts">
                            <ScatterChart
                                eventData={limitedEvents}
                            />
                            <PieChart
                                eventData={limitedEvents}
                            />
                        </div>
                    )
                    }
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
