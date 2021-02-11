import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import StarButton from '../StarButton/indes';
import MovieInfo from './MovieInfo';
import useStyles from './styles';
import { useDataContext } from './../store/Provider';

const MovieCard = ({ movie, img }) => {
    const styles = useStyles();
    const { listaFavoritos, setListaFavoritos } = useDataContext();
    const [openModal, setOpenModal] = useState(false);

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
                <img className={styles.image} src={img} alt={`${movie.original_title}_img`} onClick={setModal} />
                <MovieInfo movie={movie} img={img} open={openModal} setStatus={setModal} />
                <div className={styles.inferior}>
                    <div className={styles.nota}>
                        <p>Nota: {movie.vote_average}/10</p>
                        <p>Total de votos: {movie.vote_count}</p>
                    </div>
                    <IconButton onClick={toogleFavorito}>
                        <StarButton filled={isFilled()} />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
