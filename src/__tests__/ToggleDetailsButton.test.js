import React from 'react';
import {shallow} from 'enzyme';
import ToggleDetailsButton from '../components/ToggleDetailsButton';


describe('<Button /> component', () => {
    it('should trigger onClick callback when clicking button', () => {
        let mockCallBack = jest.fn();
        let buttonWrapper = shallow(<ToggleDetailsButton onClick={mockCallBack}/>);
        buttonWrapper.find('.button').simulate('click');
        expect(mockCallBack).toBeCalled();
    })
})
