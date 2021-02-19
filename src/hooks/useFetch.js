import { useCallback, useState } from 'react';
import api from '../services/api';

function useFetch() {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovies = useCallback(async (Request) => {
        try {
            setLoading(true);
            const { data } = await api.get(Request);
            if (data) {
                setLoading(false);
                setRes(data);
            }
        } catch (e) {
            setLoading(false);
            setError('Failed to access the list');
        }
    }, []);

    return res.results ? [res.results, loading, error, fetchMovies] : [[], loading, error, fetchMovies];
}

export default useFetch;
