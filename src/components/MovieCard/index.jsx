import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import StarButton from './StarButton';
import MovieInfo from './MovieInfo';
import useStyles from './styles';
import { useDataContext } from './../store/Provider';

function accepted(_index) {
    switch (_index) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return true;
        default:
            return false;
    }
}

const MovieCard = ({ movie, index, setMinimumLoaded }) => {
    const styles = useStyles();
    const { listaFavoritos, setListaFavoritos } = useDataContext();
    const [openModal, setOpenModal] = useState(false);
    const { baseUrl, smallBackdropSize: backdropSizes } = useDataContext();
    const src = baseUrl + backdropSizes + movie.backdrop_path;
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (imgLoaded && accepted(index)) {
            setMinimumLoaded((prev) => prev + 1);
        }
    }, [imgLoaded, setMinimumLoaded, index]);

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
                        className={styles.image}
                        src={src}
                        alt={`${movie.title || movie.name}_img`}
                        onClick={setModal}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgLoaded(true)}
                    />
                )}
                <MovieInfo movie={movie} open={openModal} setStatus={setModal} />
                <div className={styles.inferior}>
                    <div className={styles.nota}>
                        <p>
                            Rate:
                            <span className={styles.inferiorValue}>{movie.vote_average}/10</span>
                        </p>
                        <p>
                            Total Votes:<span className={styles.inferiorValue}>{movie.vote_count}</span>
                        </p>
                    </div>
                    <IconButton onClick={toogleFavorito} title='Favorite'>
                        <StarButton filled={isFilled()} />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
