import React from 'react';
import {mount, shallow} from 'enzyme';
import CitySearch from '../components/CitySearch';
import {mockData} from '../mock-data';
import {extractLocations} from '../components/api';

describe('<CitySearch/> component', () => {

    let locations, CitySearchWrapper;
    beforeAll(() => {
        locations = extractLocations(mockData);
        CitySearchWrapper = shallow(<CitySearch onSelect={() =>{}} locations={locations} updateEvents ={() => {}} />);
    })

    it('should render text input', () => {
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    it('should render a list of suggestions', () => {
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });

    it('should render text input correctly', () => {
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });

    it('should change state when text input changes', () => {
        CitySearchWrapper.setState({
            query: 'Munich'
        });
        const eventObject = {target: {value: 'Berlin'}};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe('Berlin');
    })

    it('should render list of suggestions correctly', () => {
        const locations = extractLocations(mockData);

        CitySearchWrapper.setState({suggestions: locations});
        const suggestions = CitySearchWrapper.state('suggestions');

        // There is an additional li with "See all cities" added to the end
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);

        for (let i = 0; i < suggestions.length; i += 1) {
            expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
        }
    })

    it ('should change the suggestions list to match the query', () => {
        CitySearchWrapper.setState({query: '', suggestions:[]});
        CitySearchWrapper.find('.city').simulate('change', {target: {value:'Berlin'},
        });
        const query = CitySearchWrapper.state('query');
        const suggestions =locations.filter((location) => {
            return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
        expect(CitySearchWrapper.state('suggestions')).toEqual(suggestions);
    })

    it ('should change query state when selecting a suggestion', () => {
        CitySearchWrapper.setState({
            query: 'Berlin',
            suggestions: ['London', 'Berlin']
        });
        const suggestions = CitySearchWrapper.state('suggestions');
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
    })

    it('should reveal the suggestions list when selecting CitySearch Input', () => {
        CitySearchWrapper.find('.city').simulate('focus');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({display:'none'});
    });

    it('should hide the suggestions list when selecting a suggestion', () => {
        CitySearchWrapper.setState({
            query: 'Berlin',
            showSuggestions: undefined
        });
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
    });
});