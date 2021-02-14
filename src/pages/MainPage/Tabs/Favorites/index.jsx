import React, { useState } from 'react';
import MovieList from '../../../../components/MovieList';
import { useDataContext } from './../../../../components/store/Provider';
import clsx from 'clsx';
import useStyles from './styles';

const Favorites = () => {
    const { listaFavoritos } = useDataContext();
    const [page, setPage] = useState(0);
    const styles = useStyles();
    const [listAllLoaded, setListAllLoaded] = useState(false);

    function changePage(action) {
        if (action === 'next') setPage((p) => p + 1);
        else setPage((p) => p - 1);
    }

    return (
        <div className={clsx(styles.smoothComponent, { [styles.smoothComponentLoaded]: listAllLoaded })}>
            <h1>Favorites</h1>
            {listaFavoritos.length === 0 && <h3>Lista de Favoritos Vazia</h3>}
            <MovieList
                list={listaFavoritos}
                intPage={page}
                changePage={changePage}
                setAllImagesLoaded={setListAllLoaded}
            />
        </div>
    );
};

export default Favorites;
