import React from "react";
import officeImage from "./office.jpg";

function App() {

    const office = {
        name: "DBS Office",
        rent: 75000,
        address: "Chennai"
    };


    const offices = [
        {
            name: "DBS Office",
            rent: 75000,
            address: "Chennai"
        },
        {
            name: "ABC Office",
            rent: 45000,
            address: "Bangalore"
        },
        {
            name: "XYZ Office",
            rent: 90000,
            address: "Hyderabad"
        }
    ];


    return (
        <div>

            <h1>Office Space Rental</h1>

            <img 
                src={officeImage}
                width="300px"
                alt="Office Space"
            />


            <h2>Office Details</h2>

            <p>Name: {office.name}</p>

            <p>
                Rent:
                <span style={{
                    color: office.rent < 60000 ? "red" : "green"
                }}>
                    {office.rent}
                </span>
            </p>

            <p>Address: {office.address}</p>


            <h2>Available Offices</h2>

            {
                offices.map((item, index) => (
                    <div key={index}>

                        <h3>{item.name}</h3>

                        <p>
                            Rent:
                            <span style={{
                                color: item.rent < 60000 ? "red" : "green"
                            }}>
                                {item.rent}
                            </span>
                        </p>

                        <p>
                            Address: {item.address}
                        </p>

                        <hr />

                    </div>
                ))
            }

        </div>
    );
}

export default App;