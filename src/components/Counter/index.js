import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.randomizeNumber(),
        };

        this.interval = null;
        this.startRandomize();
    }

    updateNumber = () => {
        this.setState({number: this.randomizeNumber()});
    };

    startRandomize = () => {
        this.interval = setInterval(this.updateNumber, 2500);
    };

    randomizeNumber = () => {
        return Math.round(Math.random() * 1000);
    };

    stopRandomize = () => {
        clearInterval(this.interval);
    };

    forceRandom = () => {
        this.stopRandomize();
        this.updateNumber();
        this.startRandomize();
    };

    render() {
        const {number} = this.state;
        return (
            <div className="counter-wrapper">
                <div className="counter__number">
                    {number}
                </div>
                <div className="counter__controls">
                    <button className="control force" onClick={this.forceRandom}>Force random</button>
                    <button className="control stop" onClick={this.stopRandomize}>Stop random</button>
                </div>
            </div>
        );
    }
}

Counter.displayName = 'Counter';

export default Counter;
