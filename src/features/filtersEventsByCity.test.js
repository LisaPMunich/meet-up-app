import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../components/CitySearch';
import extractLocations from '../components/api';
import {loadFeature, defineFeature} from 'jest-cucumber';


const feature = loadFeature('./src/features/filtersEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasn\'t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('the user hasn’t searched for any city', () => {

        });
        let AppWrapper;
        when('they open the app', () => {
            AppWrapper = mount(<App />);
        });

        then('they should see a list of all upcoming events.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });
    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        let CitySearchWrapper;
        given('the main page is open', () => {
            CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={[]} />);
        });

        when('the user starts typing in the city textbox', () => {
            CitySearchWrapper.find('.city').simulate('change', {target: {value: 'Berlin'}});
        });

        then('they should see a list of cities (suggestions) that match what they’ve typed.', () => {

        });
    });
    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user was typing “Berlin” in the city textbox', async () => {
            AppWrapper = await mount(<App/>);
            AppWrapper.find('.city').simulate('change', {target: {value:'Berlin'}});
        });

        and('the list of suggested cities is being displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
        });

        when(/^the user selects a city \(e.g. "(.*)"\) from the list$/, (arg0) => {
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        then('their city should be changed to that city (i.e. "Berlin, Germany)', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });

        and('the user should receive a list of upcoming events in that city.', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });
});