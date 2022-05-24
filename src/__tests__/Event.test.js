import React from 'react';
import {shallow} from 'enzyme';
import Event from '../components/Event';
import {mockData, mockEvent01} from '../mock-data';

describe('<Event /> component', () => {
    let eventWrapper;
    beforeAll(() => {
        eventWrapper = shallow(<Event event={mockEvent01}/>)
    })
    test('render collapsed single event details view', () => {
        expect(eventWrapper.find('.event')).toHaveLength(1);
    });

    test('render button to show event details view', () => {
        expect(eventWrapper.find('.button')).toHaveLength(1);
    });

    test('render title in event details view', () => {
        expect(eventWrapper.find('.event-title')).toHaveLength(1);
    });

    test('render content in event details view', () => {
        expect(eventWrapper.find('.event-dateTime')).toHaveLength(1);
        expect(eventWrapper.find('.event-timeZone')).toHaveLength(1);
        expect(eventWrapper.find('.event-name')).toHaveLength(1);
        expect(eventWrapper.find('.event-location')).toHaveLength(1);
    });

    test('clicking the ToggleDetailsButton shows the event details', () => {
        eventWrapper.find('.button').simulate('click');

        expect(eventWrapper.find('.event-description')).toHaveLength(1);
    });

});

