import React, {Component} from 'react';
import Counter from "./counter";

const createRange = num => Array.from(Array(num).keys());

class CounterList extends Component {

    state = {
        countersNum: 1
    }

    handleAddCounter = () => {
        this.setState((prevState) => ({
            countersNum: prevState.countersNum + 1
        }))
    };

    renderCounter = (num) => {
        return (
            <li key={num}>
                <Counter/>
            </li>
        )
    }

    render() {
        const countersArray = createRange(this.state.countersNum);

        return (
            <div>
                <button className='add-counter' onClick={this.handleAddCounter}>Add counter</button>
                <ul>
                    {countersArray.map((num) => this.renderCounter(num))}
                </ul>
            </div>
        );
    }

}

export default CounterList;