import React from "react";

function IndianPlayers() {

    const players = [
        "Sachin",
        "Sehwag",
        "Ganguly",
        "Dravid",
        "Yuvraj",
        "Harbhajan"
    ];


    const [odd1, even1, odd2, even2, odd3, even3] = players;


    const T20players = [
        "Rohit",
        "Virat",
        "Hardik"
    ];


    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Gill"
    ];


    const allPlayers = [...T20players, ...RanjiPlayers];


    return (
        <div>

            <h2>Odd Team Players</h2>

            <p>
                {odd1}, {odd2}, {odd3}
            </p>


            <h2>Even Team Players</h2>

            <p>
                {even1}, {even2}, {even3}
            </p>


            <h2>Merged Players</h2>

            {
                allPlayers.map(player =>
                    <p>{player}</p>
                )
            }

        </div>
    );
}

export default IndianPlayers;