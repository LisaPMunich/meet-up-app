import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventDetail.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event is collapsed by default', ({ given, and, when, then }) => {

        given('they open the app', () => {
            AppWrapper = mount(<App />);
        });

        and ('a city or number of events has been selected', () => {
            AppWrapper.find('.city').simulate('change', {target: {value:'Berlin'}});
            AppWrapper.update();
        });


        when('a list of events is being displayed', () => {
            expect(AppWrapper.find('.event-item-wrapper')).toBeTruthy();
        });

        then('the single event details are collapsed by default', () => {
            expect(AppWrapper.find('.event__details')).toHaveLength(0);
        });
    });
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('a list of events is being displayed', async () => {
            AppWrapper = await mount(<App/>)
        });

        when(/^the user clicks on a "(.*)" button of one event$/, () => {
            AppWrapper.update();
            AppWrapper.find('.button').at(0).simulate('click');
        });

        then('more details of the selected event are displayed', () => {
            expect(AppWrapper.find('.event__details')).toHaveLength(1);
        });
    });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('details of one selected event have been displayed', async () => {
            AppWrapper = await mount(<App/>)
            AppWrapper.update();
            AppWrapper.find('.button').at(0).simulate('click');
            expect(AppWrapper.find('.event__details')).toHaveLength(1);
        });

        when(/^the user clicks on a "(.*)" button in the event details view$/, (arg0) => {
            AppWrapper.find('.button').at(0).simulate('click');
        });

        then('the detailed view collapses to hide the details again', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event__details')).toHaveLength(0);
        });
    });

});