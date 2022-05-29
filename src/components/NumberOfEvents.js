import React, {Component} from 'react';
import '../styling/number-of-events.css';

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
                <label htmlFor="event-number" className="label">Select Number of Events</label>
                <input
                    type="number"
                    id="event-number"
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


export default NumberOfEvents;