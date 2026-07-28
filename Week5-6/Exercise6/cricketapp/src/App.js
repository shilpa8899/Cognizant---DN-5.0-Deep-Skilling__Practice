import React from "react";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

    let flag = false;


    if(flag) {
        return (
            <div>
                <ListofPlayers />
            </div>
        );
    }
    else {
        return (
            <div>
                <IndianPlayers />
            </div>
        );
    }

}

export default App;