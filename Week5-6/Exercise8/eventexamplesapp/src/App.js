import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConverter";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment() {
        this.setState({
            count: this.state.count + 1
        });

        this.sayHello();
    }


    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }


    sayHello() {
        alert("Hello React Event Handling");
    }


    sayWelcome(message) {
        alert(message);
    }


    handleClick = () => {
        alert("I was clicked");
    }


    render() {

        return (
            <div>

                <h1>Event Examples App</h1>


                <h2>Counter: {this.state.count}</h2>


                <button onClick={this.increment}>
                    Increment
                </button>


                <button onClick={this.decrement}>
                    Decrement
                </button>


                <br /><br />


                <button onClick={() => this.sayWelcome("welcome")}>
                    Say Welcome
                </button>


                <br /><br />


                <button onClick={this.handleClick}>
                    OnPress
                </button>


                <hr />


                <CurrencyConvertor />

            </div>
        );
    }
}


export default App;