import React, {Component} from 'react';
import EventDetail from './EventDetail';

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <ul className="EventList">
                {events.map(event =>
                    <li
                        key={event.id}>
                        <EventDetail
                            event={event}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default EventList;