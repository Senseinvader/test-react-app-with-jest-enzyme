import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        counter: 0,
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            };
        })
    }

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            };
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div>
                    <p>Counter: {this.state.counter}</p>
                    <button onClick={this.handleIncrement} className='increment'>Increment</button>
                    <button onClick={this.handleDecrement} className='decrement'>Decrement</button>
                </div>
            </div>
        );
    }
}

export default App;
