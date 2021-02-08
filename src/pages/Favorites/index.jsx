import React from 'react';
import MovieList from '../../components/MovieList';
import { useDataContext } from './../../components/store/Provider';

const Favorites = () => {
    const { listaFavoritos } = useDataContext();

    return (
        <>
            <h1>Favorites</h1>
            {listaFavoritos.length === 0 && <h3>Lista de Favoritos Vazia</h3> }
            <MovieList list={ listaFavoritos } />
        </>
    );
}

export default Favorites;
