import React, {Component} from 'react';
import EventDetail from './EventDetail';
import '../styling/event-list.css'

class EventList extends Component {
    render() {
        const {events} = this.props;
        console.log('RENDER EventList', events.length)
        return (
            <ul className="event-list-wrapper">
                {events.map(event =>
                    <li
                        key={event.id}
                    className="event-list">
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