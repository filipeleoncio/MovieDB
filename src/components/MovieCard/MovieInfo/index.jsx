import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDataContext } from './../../store/Provider';

const MovieInfo = ({ movie, open, setStatus }) => {
    const styles = useStyles();
    const { baseUrl, backdropSizes, genres } = useDataContext();

    function getImage() {
        return baseUrl + backdropSizes + movie.poster_path;
    }

    function getGenre(id) {
        const genre = genres.find((genre) => genre.id === id);
        if (genre) return genre.name;
    }

    return (
        <Modal
            className={styles.modal}
            open={open}
            onClose={setStatus}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={styles.paper}>
                    <img className={styles.image} src={getImage()} alt={`${movie.original_title}_img`} />
                    <div className={styles.info}>
                        <div className={styles.closeButton}>
                            <Button onClick={setStatus}>
                                <CloseIcon className={styles.iconSize} />
                            </Button>
                        </div>
                        <Typography className={styles.title}>{movie.title || movie.name}</Typography>
                        <Typography className={styles.overview}>{movie.overview}</Typography>
                        <div className={styles.bottom}>
                            <p>
                                Genre:
                                <span className={styles.subInfoValue}>
                                    {movie.genre_ids.map((genre, index) => (
                                        <span key={index}>
                                            {index > 0 ? ', ' : null}
                                            {getGenre(genre)}
                                        </span>
                                    ))}
                                </span>
                            </p>
                            <p>
                                Release Date:
                                <span className={styles.subInfoValue}>
                                    {movie.release_date || movie.first_air_date}
                                </span>
                            </p>
                            <p>
                                Popularity:<span className={styles.subInfoValue}> {movie.popularity}</span>
                            </p>
                        </div>
                        <div className={styles.nota}>
                            <p>Nota: {movie.vote_average}/10</p>
                            <p>Total de votos: {movie.vote_count}</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default MovieInfo;
