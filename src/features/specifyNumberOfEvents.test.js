import React from "react";
import {loadFeature, defineFeature} from 'jest-cucumber';
import {mount} from "enzyme";
import App from "../App";
import CitySearch from '../components/CitySearch';
import NumberOfEvents from "../components/NumberOfEvents";
import EventDetail from "../components/EventDetail";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user has selected a city', async () => {
            AppWrapper = await mount(<App/>);
            AppWrapper.find('.city').simulate('change', {target: {value:'Berlin'}});
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        when('they have not specified a number of events to be displayed', () => {

        });

        then(/^the search box next to the city textbox will contain the default value of (\d+).$/, (arg0) => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-number').props().value).toEqual('32');
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user has selected a city', async () => {
            AppWrapper = await mount(<App/>);
            AppWrapper.find('.city').simulate('change', {target: {value:'Berlin'}});
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        when('they click into the number of events box next to the city search box', () => {
            AppWrapper.update();
            AppWrapper.find('.event-number').simulate('click');
        });

        when('they can type in a number to specify the number of events to show', async() => {
            AppWrapper.update();
            const eventObject = {target: {value: '1'}};
            await AppWrapper.find('.event-number').simulate('change', eventObject);
        });

        then('the event list is reduced to the specified number.',async () => {
            await AppWrapper.update();
            expect(AppWrapper.find(EventDetail).length).toEqual(1);
        })
    });
});