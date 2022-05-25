import React from 'react';
import enzyme, {mount, shallow} from 'enzyme';
import App from '../App';
import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<App/> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper= shallow(<App />);
    })

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1)
    });

    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1)
    })

    // test('onChange NumberOfEvents is triggered', () => {
    //     const AppWrapper = mount(<App />);
    //     const eventObject = {target: {value: 30}};
    //     AppWrapper.find(NumberOfEvents).simulate('onChange', eventObject);
    //
    //     expect(AppWrapper.state('numberFilter')).toBe(30)
    // })

});