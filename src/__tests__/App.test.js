import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../App';
import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';

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
    it('should trigger NumberOfEvents with onChange', () => {
        const AppWrapper = mount(<App />);
        const eventObject = {target: {value: 30}};
        const NumberOfEventsComponent = AppWrapper.find(NumberOfEvents);
        NumberOfEventsComponent.find('.event-number').simulate('change', eventObject);

        expect(AppWrapper.state('numberFilter')).toBe(30)
    });

    it ('should confirm that CitySearch has props locations', () => {
        const AppWrapper = mount(<App/>);
        expect(AppWrapper.find(CitySearch).props()).toHaveProperty('locations')
    })

    it ('should confirm that CitySearch has props onSelect', () => {
        const AppWrapper = mount(<App/>);
        expect(AppWrapper.find(CitySearch).props()).toHaveProperty('onSelect')
    })

    it ('should confirm that NumberOfEvents has props onChange', () => {
        const AppWrapper = mount(<App/>);
        expect(AppWrapper.find(NumberOfEvents).props()).toHaveProperty('onChange')
    })

    it ('should confirm that EventList has props events', () => {
        const AppWrapper = mount(<App/>);
        expect(AppWrapper.find(EventList).props()).toHaveProperty('events')
    })

})


