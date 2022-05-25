import React, {Component} from 'react';
import ToggleDetailsButton from './ToggleDetailsButton';


class EventDetail extends Component {

    state = {
        htmlLink: '',
        description: '',
        showDetails: false
    }

    handleClick = (event) => {
        this.setState({
            showDetails: !this.state.showDetails,
        });
    }

    render() {
        const {event} = this.props;
        const buttonText = this.state.showDetails
            ? "Hide Details"
            : "Show Details";
        return (
            <div className="event">
                <h2 className="event-title">{event.summary}</h2>
                <p className="event-time">
                    <span className="event-dateTime">{event.start.dateTime}</span>
                    <span className="event-timeZone">({event.start.timeZone})</span>
                </p>
                <p>
                    <span className="event-name">@{event.summary} </span>
                    <span className="event-location">| {event.location}</span>
                </p>
                 {this.state.showDetails && (
                    <p>About event:
                        <a className="event-link">{event.htmlLink} </a>
                        <p className="event-description">{event.description}</p>
                    </p>
                 )
                }

                <ToggleDetailsButton
                    onClick={this.handleClick}
                    className="button">
                    {buttonText}
                </ToggleDetailsButton>
            </div>
        );
    }
}

export default EventDetail;