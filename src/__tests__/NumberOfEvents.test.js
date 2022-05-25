import React from 'react';
import enzyme, {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents onChange={() =>{}}/>);
    })

    test('render text input box', () => {
        expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
    })


    test('change state when text input changes', () => {
        const eventObject = {target: {value: 30}};
        NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state().number).toEqual(30);
    })

    test ('set default value of 32 for input field', () => {
        const number = NumberOfEventsWrapper.state('number');
        const element = NumberOfEventsWrapper.find('input');
        expect(element.prop('value')).toEqual(number);
    })

    test ('change event on text input box', () => {
        const spy = jest.fn();
        const NumberOfEventsWrapper = enzyme.shallow(<NumberOfEvents onChange={spy}/>);
        const eventObject = {target: {value: 30}};
        NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
        expect(spy).toBeCalled();

    })
})