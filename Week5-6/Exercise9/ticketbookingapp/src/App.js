import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }


    login = () => {

        this.setState({
            isLoggedIn: true
        });

    }


    logout = () => {

        this.setState({
            isLoggedIn: false
        });

    }


    render() {


        let page;


        if(this.state.isLoggedIn) {

            page = (
                <User logout={this.logout}/>
            );

        }

        else {

            page = (
                <Guest login={this.login}/>
            );

        }


        return (

            <div>

                <h1>Flight Ticket Booking Application</h1>

                {page}

            </div>

        );

    }

}


export default App;