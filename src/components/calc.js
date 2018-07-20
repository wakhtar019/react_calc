import React, { Component } from 'react'
import Aux from '../../src/Auxiliary/Auxiliary';
import Classes from './calc.css';

class Calc extends Component {
        state = {
            counter: 0
        }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    addTen = () => {
        this.setState({ counter: this.state.counter + 10 });
    }

    subFifteen = () => {
        this.setState({ counter: this.state.counter - 15 });
    }

    render() {
        return (
            <Aux>
                <div className={Classes.divCurrentCounter}><p>Current Counter:</p>{this.state.counter}
                </div>
                <div className={Classes.div}>
                    <button className={Classes.button} onClick={this.increment}>Increment</button>
                    <button className={Classes.button} onClick={this.decrement}>Decrement</button>
                    <button className={Classes.button} onClick={this.addTen}>Add 10</button>
                    <button className={Classes.button} onClick={this.subFifteen}>Subtract 15</button>
                </div>
                <div className={Classes.storeResultDiv}>
                    <button className={Classes.storeResultButton}>Store Result</button>
                </div>
            </Aux>
        );
    }
}

export default Calc;