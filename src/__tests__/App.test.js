import React from 'react';
import {shallow, mount} from 'enzyme';
import {mockData} from '../mock-data';
import {extractLocations, getEvents} from '../components/api';
import App from '../App';
import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import EventDetail from "../components/EventDetail";

describe('<App/> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper= shallow(<App />);
    })

    it('should render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    it('should render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1)
    });

    it('should render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1)
    })



});


describe('App test for props', () => {

    it ('should confirm that CitySearch has props locations', () => {
        const AppWrapper = mount(<App/>);
        expect(AppWrapper.find(CitySearch).props()).toHaveProperty('locations')
    })

    it ('should confirm that EventList has props events', () => {
        const AppWrapper = mount(<App/>);
        expect(AppWrapper.find(EventList).props()).toHaveProperty('events')
    })

})

describe('<App /> integration', () => {
    it('should allow that App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });
    it('should allow the App to pass "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });
    it('should allow to get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    it('should get a list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });
});

describe('<App/> integration',  () => {
    it('should allow that App passes "eventCount" state as a prop to NumberOfEvents',  () => {
        const AppWrapper = mount(<App />);
        const AppEventCountState = AppWrapper.state('eventCount');
        expect(AppEventCountState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().eventCount).toEqual(AppEventCountState);
        AppWrapper.unmount();
    });

    it ('should trigger NumberOfEvents with onChange', () => {
        const AppWrapper = mount(<App />);
        const eventObject = {target: {value: '30'}};
        const NumberOfEventsComponent = AppWrapper.find(NumberOfEvents);
        NumberOfEventsComponent.find('.event-number').simulate('change', eventObject);
        expect(AppWrapper.state('eventCount')).toBe(30)
    });

    it('should number of displayed list events should match eventCount',  async () => {
        const AppWrapper = mount(<App/>);
        await AppWrapper.setState({
            events: mockData,
        });

        expect(AppWrapper.find(EventDetail)).toHaveLength(mockData.length);

        await AppWrapper.setState({ eventCount: 1});
        expect(AppWrapper.find(EventDetail)).toHaveLength(1);
    });
});



