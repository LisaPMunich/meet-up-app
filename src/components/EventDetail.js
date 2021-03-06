import React, {Component} from 'react';
import ToggleDetailsButton from './ToggleDetailsButton';
import '../styling/event-detail.css';


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
                <div className="event-title-wrapper">
                    <h2 className="event-title">{event.summary}
                    </h2>
                    <ToggleDetailsButton
                        onClick={this.handleClick}
                        className="button">
                        {buttonText}
                    </ToggleDetailsButton>
                </div>
                <div className="event-description-wrapper">
                    <p className="event-time">
                        <span className="event-dateTime">{event.start.dateTime}</span>
                        <span className="event-timeZone"> ({event.start.timeZone})</span>
                    </p>
                    <p>
                        <span className="event-name">@{event.summary} </span>
                        <span className="event-location">| {event.location}</span>
                    </p>
                     {this.state.showDetails && (
                        <div className="event__details">
                            <h3 className="event__details-header">About event:</h3>
                            <div>
                                <a href={event.htmlLink} className="event-link">
                                    Add it to your Google calendar
                                </a>
                            </div>
                            <p className="event-description">{event.description}</p>
                        </div>
                     )
                    }
                </div>
            </div>
        );
    }
}

export default EventDetail;