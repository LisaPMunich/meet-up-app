import React, {Component} from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import NavBar from './components/NavBar';
import {extractLocations, getEvents} from './components/api';
import './styling/nprogress.css';
import {OfflineAlert} from "./components/Alert";

class App extends Component {
    state = {
        events: [],
        locations: [],
        eventCount: 32,
        offlineAlertText: "",
    }

    componentDidMount() {
        getEvents().then((events) => {
            this.setState({
                events,
                locations: extractLocations(events)
            });
            if (!navigator.online){
                this.setState({
                    offlineAlertText: "You are currently offline and can only view cached content."
                })
            } else {
                this.setState({
                    offlineAlertText: "",
                })
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
                    <OfflineAlert/>
                    <div className="input-wrapper">
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
            </div>
        );
    }
}

export default App;


// let filteredEvents = [...mockData];
// let locations = mockData.map(item => item.location);
//
// // Filter by city, if city filter field is not empty
// const cityFilter = 'Berlin';
// filteredEvents = mockData.filter(item => item.location === cityFilter);
//
// // Filter to only show the first X elements, if numberFilter is set
// const numberFilter = 5;
// filteredEvents = filteredEvents.slice(0, numberFilter - 1);