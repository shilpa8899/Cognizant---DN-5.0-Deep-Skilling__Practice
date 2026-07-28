import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "MS Dhoni", score: 65 },
        { name: "Hardik Pandya", score: 75 },
        { name: "KL Rahul", score: 55 },
        { name: "Rishabh Pant", score: 60 },
        { name: "Jasprit Bumrah", score: 90 },
        { name: "Ravindra Jadeja", score: 80 },
        { name: "Shubman Gill", score: 72 },
        { name: "Shreyas Iyer", score: 68 },
        { name: "Mohammed Siraj", score: 50 }
    ];


    const playerList = players.map(player =>
        <li>
            {player.name} - {player.score}
        </li>
    );


    const filteredPlayers = players.filter(player =>
        player.score < 70
    );


    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {playerList}
            </ul>


            <h2>Players with score below 70</h2>

            {
                filteredPlayers.map(player =>
                    <p>
                        {player.name} - {player.score}
                    </p>
                )
            }

        </div>
    );
}

export default ListofPlayers;