import React, {Component, useState} from 'react';
import PropTypes from "prop-types";

class CitySearch extends Component {
    state = {
        query: '',
        filteredLocations: []
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
            query: value,
            filteredLocations,
        });
    };

    handleItemClicked = (location) => {
        this.setState({
            query: location
        });
        this.props.onSelect(location)
    }

    render() {
        return(
            <div className="city-search">
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ul className="filtered-locations">
                    {this.state.filteredLocations.map((location) => (
                        <li
                            key={location}
                            onClick={() => this.handleItemClicked(location)}
                        >{location}</li>
                    ))}
                    <li key='all'>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        )
    }
}

CitySearch.propTypes = {
    locations: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default CitySearch;

