import { Typography } from "@material-ui/core";
import PenListContainer from "./PenListContainer";

const App = () => {
    return (
        <div className="App">
            <Typography variant="h2" component="h2" data-test="heading">InkedUp</Typography>
            <PenListContainer />
        </div>
    );
}

export default App;
