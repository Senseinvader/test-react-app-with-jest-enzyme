import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('App component', () => {
    it('Starts counter with 0', () => {
        const wrapper = shallow(<App/>);
        const text = wrapper.find('p').text();
        const counterState = wrapper.state().counter;
        expect(text).toEqual('Counter: 0');
    });
    it('increment counter by 1 by clicking the button', () => {
        const wrapper = shallow(<App/>);
        const incrButton = wrapper.find('button.increment');
        incrButton.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Counter: 1');
    });
    it('decrement counter by 1 by clicking the button', () => {
        const wrapper = shallow(<App/>);
        const decrButton = wrapper.find('button.decrement');
        decrButton.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Counter: -1');
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
        });
    it('matches the snapshot', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
