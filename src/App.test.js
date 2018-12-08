import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('App component', () => {
    it('Starts counter with 0', () => {
        const wrapper = shallow(<App/>);
        const counterState = wrapper.state().counter;
        expect(counterState).toEqual(0);
    })
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
        });
})


