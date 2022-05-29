import React, {Component} from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import NavBar from './components/NavBar';
import {extractLocations, getEvents} from './components/api';
import './styling/nprogress.css';

class App extends Component {
    state = {
        events:[],
        locations:[],
    }

    componentDidMount(){
        getEvents().then((events) => {
            this.setState({events, locations: extractLocations(events)});
        });
    }

    componentWillUnmount(){
        this.mounted = false
    }

    updateEvents = (location) => {
        getEvents().then((events) => {
            const locationEvents = (location === 'all') ? events :
                events.filter((event) =>
                event.location === location);
            this.setState({
                events: locationEvents
            });
        });
    }

    render() {

        return (
            <div className="App">
                <NavBar/>
                <main>
                    <div className="input-wrapper">
                        <CitySearch
                            locations={this.state.locations}
                            updateEvents={this.updateEvents}
                            className="city-search"
                        />
                        <NumberOfEvents
                            className="number-of-events"
                        />
                    </div>
                    <EventList
                        className="event-list"
                        events={this.state.events}
                    />
                </main>
            </div>
        );
    }
}

export default App;
