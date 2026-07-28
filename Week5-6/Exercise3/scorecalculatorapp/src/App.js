import {CalculateScore} from './Components/CalulateScore';

function App()
{
    return(
        <div>
            <CalculateScore 
                Name={"Apeksha"}
                School={"Sri Chaitanya High School"}
                total={300}
                goal={3}
            />
        </div>
    )
}

export default App;