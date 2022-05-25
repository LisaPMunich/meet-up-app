import React from 'react';
import {shallow} from 'enzyme';
import EventList from '../components/EventList';
import EventDetail from '../components/EventDetail';
import {mockData} from '../mock-data';

describe('<EventList /> component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events = {mockData}/>);
        expect(EventListWrapper.find(EventDetail)).toHaveLength(mockData.length);
    });
});