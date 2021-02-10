import React from 'react';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const Latest = () => {
    const [ movie, loading, error ] = useFetch( apiData.latest );

    const lista = movie !== '' ? [ movie ] : [];

    return (
        <>
            {loading && <p>Loading</p> }
            {error && <p>Erro</p> }
            <h1>Pagina de Lançamentos:</h1>
            <h3>Lançamento de hoje:</h3>
            <MovieList list={ lista } />
        </>
    );
}

export default Latest;
