import React from 'react';
import Counter from '../src/components/counter';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('App component', () => {

    it('Starts counter with 0', () => {
        const wrapper = shallow(<Counter/>);
        const text = wrapper.find('p').text();
        const counterState = wrapper.state().counter;
        expect(text).toEqual('Counter: 0');
    });
    it('increment counter by 1 by clicking the button', () => {
        const wrapper = shallow(<Counter/>);
        const incrButton = wrapper.find('button.increment');
        incrButton.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Counter: 1');
    });
    it('decrement counter by 1 by clicking the button', () => {
        const wrapper = shallow(<Counter/>);
        const decrButton = wrapper.find('button.decrement');
        decrButton.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Counter: -1');
    });
    it('matches the snapshot', () => {
        const tree = renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('matches the snapshot', () => {
        const tree = renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})