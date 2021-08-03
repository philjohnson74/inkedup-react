import {useEffect, useState} from "react";
import axios from 'axios';

export const useRemoteService = (initial) => {
    const [pens, setPens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPens = async () => {
            setError(false);
            setLoading(true);

            try {
                const result = await axios.get("http://localhost:8080/pens");
                setPens(result.data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPens();
    }, []);

    console.log(pens);
    console.log(loading);
    console.log(error);

    return {pens, loading, error};
}