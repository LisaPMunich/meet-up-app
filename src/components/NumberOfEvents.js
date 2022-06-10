import React, {Component} from 'react';
import '../styling/number-of-events.css';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component{
    state = {
        number: '32',
        errorText: null,
    }

    handleInputChanged = (event) => {
        let number = event.target.value * 1;
        if(number < 0){
            number = 0;
        }
        if(number > 32) {
            this.setState({
                number,
                errorText: 'Select number from 1 to 32',
            });
        } else {
            this.setState({
                number,
                errorText:null
            })
        }
        this.props.onChange(number)

    };

    render() {
        return(
            <div className="event-number-wrapper">
                <ErrorAlert text={this.state.errorText}/>
                <label htmlFor="event-number" className="label">Select Number of Events</label>
                <input
                    type="number"
                    id="event-number"
                    className="event-number"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleInputChanged.bind(this)}
                />
            </div>
        )
    }

}


export default NumberOfEvents;