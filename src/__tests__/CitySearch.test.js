import React from 'react';
import {mount, shallow} from 'enzyme';
import CitySearch from '../components/CitySearch';
import {mockData} from '../mock-data';
import {extractLocations} from '../components/api';

describe('<CitySearch/> component', () => {

    let locations, CitySearchWrapper;
    beforeAll(() => {
        locations = extractLocations(mockData);
        CitySearchWrapper = shallow(<CitySearch onSelect={() =>{}} locations={locations}/>);
    })

    test('render text input', () => {
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    test('renders a list of suggestions', () => {
        expect(CitySearchWrapper.find('.filtered-locations')).toHaveLength(1);
    });

    test('renders text input correctly', () => {
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });

    test('change state when text input changes', () => {
        CitySearchWrapper.setState({
            query: 'Munich'
        });
        const eventObject = {target: {value: 'Berlin'}};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe('Berlin');
    })

    test('render list of suggestions correctly', () => {
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({filteredLocations: locations});
        const filteredLocations = CitySearchWrapper.state('filteredLocations');
        expect(CitySearchWrapper.find('.filtered-locations li')).toHaveLength(filteredLocations.length + 1);
        for (let i = 0; i < filteredLocations.length; i += 1) {
            expect(CitySearchWrapper.find('.filtered-locations li').at(i).text()).toBe(filteredLocations[i]);
        }
    })

    test ('suggestions list match the query when changes', () => {
        CitySearchWrapper.setState({query: '', filteredLocations:[]});
        CitySearchWrapper.find('.city').simulate('change', {target: {value:'Berlin'},
        });
        const query = CitySearchWrapper.state('query');
        const filteredLocations =locations.filter((location) => {
            return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
        expect(CitySearchWrapper.state('filteredLocations')).toEqual(filteredLocations);
    })

    test ('selecting a suggestion should change query state', () => {
        CitySearchWrapper.setState({
            query: 'Berlin'
        });
        const filteredLocations = CitySearchWrapper.state('filteredLocations');
        CitySearchWrapper.find('.filtered-locations li').at(0).simulate('click');
        expect(CitySearchWrapper.state('query')).toBe(filteredLocations[0]);
    })
});