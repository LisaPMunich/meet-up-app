import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styling/city-search.css';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    componentDidMount() {
        this.setState({
            suggestions: [...this.props.locations]
        })
    }


    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
            query: value,
            suggestions,
        });
    };


    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });
        this.props.updateEvents(suggestion)
    }

    render() {
        return(
            <div className="city-search">
                <label htmlFor="city" className="label">Search for a City</label>
                <input
                    type="text"
                    id="city"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => {this.setState({showSuggestions: true})}}
                    onfocusout={() => {this.setState({showSuggestions: false})}}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {} : {display: 'none'}}>
                    {this.state.suggestions.map((location) => (
                        <li
                            className="city-search--list-item"
                            key={location}
                            onClick={() => this.handleItemClicked(location)}
                        >{location}</li>
                    ))}
                    <li key='all'
                        onClick={() => this.handleItemClicked("all") }>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        )
    }
}

CitySearch.propTypes = {
    locations: PropTypes.array.isRequired,
    updateEvents: PropTypes.func.isRequired,
};

export default CitySearch;
