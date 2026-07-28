import React from "react";

function Guest(props) {

    return (
        <div>

            <h2>Welcome Guest</h2>

            <h3>Available Flights</h3>

            <ul>
                <li>Delhi to Mumbai - ₹5000</li>
                <li>Chennai to Bangalore - ₹3500</li>
                <li>Kolkata to Delhi - ₹4500</li>
            </ul>


            <button onClick={props.login}>
                Login
            </button>

        </div>
    );
}

export default Guest;