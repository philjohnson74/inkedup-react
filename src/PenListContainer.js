import PenList from "./PenList";
import { useRemoteService } from "./Hooks.js";

const PenListContainer = () => {
    const {pens, loading, error} = useRemoteService([]);

    return <PenList pens={pens} loading={loading} error={error}/>;
}

export default PenListContainer;