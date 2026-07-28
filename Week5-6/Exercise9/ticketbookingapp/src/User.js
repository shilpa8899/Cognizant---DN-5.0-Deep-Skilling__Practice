import React from "react";

function User(props) {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>Book Your Flight Ticket</h3>

            <p>
                Select your preferred flight and complete booking.
            </p>


            <button onClick={props.logout}>
                Logout
            </button>

        </div>

    );
}

export default User;