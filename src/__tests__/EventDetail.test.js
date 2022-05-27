import React from 'react';
import {shallow} from 'enzyme';
import EventDetail from '../components/EventDetail';
import {mockData, mockEvent01} from '../mock-data';


describe('<Event /> component', () => {
    let eventWrapper;
    beforeAll(() => {
        eventWrapper = shallow(<EventDetail event={mockEvent01}/>)
    })
    it('should render collapsed single event details view', () => {
        expect(eventWrapper.find('.event')).toHaveLength(1);
    });

    it('should render button to show event details view', () => {
        expect(eventWrapper.find('.button')).toHaveLength(1);
    });

    it('should render title in event details view', () => {
        expect(eventWrapper.find('.event-title')).toHaveLength(1);
    });

    it('should render content in event details view', () => {
        expect(eventWrapper.find('.event-dateTime')).toHaveLength(1);
        expect(eventWrapper.find('.event-timeZone')).toHaveLength(1);
        expect(eventWrapper.find('.event-name')).toHaveLength(1);
        expect(eventWrapper.find('.event-location')).toHaveLength(1);
    });

    it('should show the event details when clicking the ToggleDetailsButton', () => {
        eventWrapper.find('.button').simulate('click');
        expect(eventWrapper.find('.event-description')).toHaveLength(1);
    });

});

