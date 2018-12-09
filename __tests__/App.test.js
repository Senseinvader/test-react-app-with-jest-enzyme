import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import './setup/setupTests';

describe('App component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
        });
    // it('matches the snapshot', () => {
    //    const tree = renderer.create(<App/>).toJSON();
    //    expect(tree).toMatchSnapshot();
    // });
})
