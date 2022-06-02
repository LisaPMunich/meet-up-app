import React, {Component} from 'react';
import EventDetail from './EventDetail';
import '../styling/event-list.css'

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <ul className="event-item-wrapper">
                {events.map(event =>
                    <li
                        key={event.id}
                    className="event-item">
                        <EventDetail
                            event={event}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default EventList