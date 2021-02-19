import React, { useEffect, useState } from 'react';
import MovieList from '../../../../components/MovieList';
import { useDataContext } from './../../../../components/store/Provider';
import clsx from 'clsx';
import useStyles from './styles';

const Favorites = () => {
    const { listaFavoritos } = useDataContext();
    const [page, setPage] = useState(0);
    const styles = useStyles();
    const [listAllLoaded, setListAllLoaded] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    function changePage(action) {
        if (action === 'next') setPage((p) => p + 1);
        else setPage((p) => p - 1);
    }

    useEffect(() => {
        setTimeout(() => {
            if (listaFavoritos.length === 0) setShowMessage(true);
        }, 100);
    }, [listaFavoritos]);

    return (
        <div
            className={clsx(styles.smoothComponent, {
                [styles.smoothComponentLoaded]: listAllLoaded || showMessage,
            })}
        >
            <h1>Favorites</h1>
            {listaFavoritos.length === 0 && <h3>Your Favorites List is Empty</h3>}
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
