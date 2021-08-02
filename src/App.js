import { Typography } from "@material-ui/core";
import PenList from "./PenList";

function App() {
    const pens = [{ displayName: "Montblanc Starwalker Urban Spirit"}, { displayName: "Platinum President"}];

    return (
        <div className="App">
            <Typography variant="h2" component="h2" data-test="heading">InkedUp</Typography>
            <PenList pens={pens} />
        </div>
    );
}

export default App;
