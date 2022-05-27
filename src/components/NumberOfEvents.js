import React, {Component} from 'react';
import PropTypes from "prop-types";

class NumberOfEvents extends Component{
    state = {
        number: '32'
    }

    handleInputChanged = (event) => {
        this.setState({
            number: event.target.value,

        });
        this.props.onChange(event.target.value)
    };

    render() {
        return(
            <div className="event-number-wrapper">
                <input
                    type="number"
                    className="event-number"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleInputChanged.bind(this)}
                    placeholder="enter number of events"
                />
            </div>
        )
    }

}

NumberOfEvents.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default NumberOfEvents;