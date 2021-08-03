import {useEffect, useState} from "react";
import { Typography } from "@material-ui/core";
import axios from 'axios';
import PenList from "./PenList";

const App = () => {
    const [pens, setPens] = useState([]);

    useEffect(() => {
        const fetchPens = async () => {
            const result = await axios.get("http://localhost:8080/pens");
            setPens(result.data);
        };

        fetchPens();
    }, []);

    return (
        <div className="App">
            <Typography variant="h2" component="h2" data-test="heading">InkedUp</Typography>
            <PenList pens={pens} />
        </div>
    );
}

export default App;
