import React, { Component } from "react";


class CurrencyConvertor extends Component {


    constructor(props) {
        super(props);

        this.state = {
            rupees: "",
            euro: ""
        };
    }


    handleSubmit = () => {

        let euroValue = this.state.rupees / 90;

        this.setState({
            euro: euroValue.toFixed(2)
        });

    }


    render() {

        return (

            <div>

                <h2>Currency Convertor</h2>


                <input
                    type="number"
                    placeholder="Enter Rupees"
                    onChange={(e) =>
                        this.setState({
                            rupees: e.target.value
                        })
                    }
                />


                <button onClick={this.handleSubmit}>
                    Convert
                </button>


                <h3>
                    Euro: {this.state.euro}
                </h3>


            </div>

        );
    }
}


export default CurrencyConvertor;