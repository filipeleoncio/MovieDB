import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import StarButton from '../StarButton/indes';
import MovieInfo from './MovieInfo';
import useStyles from './styles';
import { useDataContext } from './../store/Provider';
import clsx from 'clsx';
// import Nota from './MovieInfo/Nota';

// const MovieCard = ({ movie, setLoadedImages }) => {
const MovieCard = ({ movie }) => {
    const styles = useStyles();
    const { listaFavoritos, setListaFavoritos } = useDataContext();
    const [openModal, setOpenModal] = useState(false);
    const { baseUrl, backdropSizes } = useDataContext();
    const src = baseUrl + backdropSizes + movie.backdrop_path;
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        console.log(imgLoaded ? 'loaded' : 'loading');
        // if (imgLoaded) setLoadedImages((prev) => prev + 1);
        // }, [imgLoaded, setLoadedImages]);
    }, [imgLoaded]);

    function toogleFavorito() {
        const favorito = listaFavoritos.some((mov) => mov.id === movie.id);
        if (favorito) {
            listaFavoritos.splice(
                listaFavoritos.findIndex((mov) => mov.id === movie.id),
                1,
            );
            setListaFavoritos([...listaFavoritos]);
        } else {
            setListaFavoritos([...listaFavoritos, movie]);
        }
    }

    function isFilled() {
        return listaFavoritos.some((mov) => mov.id === movie.id);
    }

    function setModal() {
        setOpenModal((status) => !status);
    }

    return (
        <Card className={styles.root}>
            <CardContent className={styles.cardContent}>
                <Typography className={styles.title}>{movie.title || movie.name}</Typography>
                {baseUrl && backdropSizes && (
                    <img
                        className={clsx(styles.image, styles.smoothImage, { [styles.smoothImageLoaded]: imgLoaded })}
                        src={src}
                        alt={`${movie.original_title}_img`}
                        onClick={setModal}
                        onLoad={() => setImgLoaded(true)}
                    />
                )}
                <MovieInfo movie={movie} open={openModal} setStatus={setModal} />
                <div className={styles.inferior}>
                    <div className={styles.nota}>
                        <p>Nota: {movie.vote_average}/10</p>
                        <p>Total de votos: {movie.vote_count}</p>
                    </div>
                    {/* <Nota movie={movie} /> */}
                    <IconButton onClick={toogleFavorito} title='Favoritar'>
                        <StarButton filled={isFilled()} />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
