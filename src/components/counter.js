import React, {Component} from 'react';

class Counter extends Component {

    state = {
        counter: 0,
    }

    makeIncrementer = amount => () => {
        this.setState(prevState => ({
            counter: prevState.counter + amount
        }))
    }

    handleIncrement = this.makeIncrementer(1);
    handleDecrement = this.makeIncrementer(-1);

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.handleIncrement} className='increment'>+++</button>
                <button onClick={this.handleDecrement} className='decrement'>---</button>
            </div>
        );
    }
}

export default Counter;