import React from 'react';
import CounterList from '../src/components/counter-list';
import {shallow} from 'enzyme';
import './setup/setupTests';

describe('counter list', () => {
    it('starts with one counter on the page', () => {
       const wrapper = shallow(<CounterList/>);
       const counters = wrapper.find('Counter');
       expect(counters.length).toEqual(1);
    });
    it('adds one more Counter by clicking add button', () => {
        const wrapper = shallow(<CounterList/>);
        const btn = wrapper.find('button.add-counter');
        btn.simulate('click');
        const counters = wrapper.find('Counter');
        expect(counters.length).toEqual(2);
    });
    it('deletes one Counter by clicking remove button', () => {
        const wrapper = shallow(<CounterList/>);
        const btn = wrapper.find('button.remove-counter');
        btn.simulate('click');
        const counters = wrapper.find('Counter');
        expect(counters.length).toEqual(0);
    });
})