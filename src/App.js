import React, {Component} from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from "./components/NumberOfEvents";
import {mockData} from "./mock-data";


class App extends Component {
    state = {
        cityFilter: '',
        numberFilter: '32'
    }

    render() {
        let filteredEvents = [...mockData];
        let locations = mockData.map(item => item.location);

        // Filter by city, if city filter field is not empty
        const cityFilter = 'Berlin';
        filteredEvents = mockData.filter(item => item.location === cityFilter);

        // Filter to only show the first X elements, if numberFilter is set
        const numberFilter = 5;
        filteredEvents = filteredEvents.slice(0, numberFilter - 1);

        return (
            <div className="App">
                <CitySearch
                    locations={locations}
                    onSelect={(location) => {this.setState({cityFilter: location})}}
                />
                <NumberOfEvents
                    onChange={(number) => {this.setState({numberFilter: number})}}
                />
                <EventList events={filteredEvents}/>
            </div>
        );
    }
}

export default App;
