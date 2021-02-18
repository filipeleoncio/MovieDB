import React, { useCallback, useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDataContext } from './../../store/Provider';
import Nota from './Nota';
import useFetch from '../../../hooks/useFetch';
import apiData from '../../../services/apiData';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const MovieInfo = ({ movie, open, setStatus }) => {
    const styles = useStyles();
    const { baseUrl, originalBackdropSize: backdropSizes, genres } = useDataContext();
    const [videoList, loading, error, fetchVideos] = useFetch();
    const [displayVideo, setDisplayVideo] = useState(false);
    // const [providersBR, setProvidersBR] = useState(null);

    // useEffect(() => {
    //     console.log('br:', providersBR);
    //     if (open && !providersBR) {
    //         console.log('open:', providerList);
    //         fetchProviders(apiData.whatchProviders(movie.id));
    //         if (providerList.BR) {
    //             setProvidersBR(providerList.BR);
    //         }
    //     }
    // }, [fetchProviders, providerList, providersBR, movie, open]);

    useEffect(() => {
        if (open && videoList.length === 0 && loading) {
            if (movie.media_type) {
                console.log(movie.media_type);
                fetchVideos(apiData.videos(movie.media_type, movie.id));
            } else {
                console.log('no type');
                fetchVideos(apiData.videos('movie', movie.id));
            }
        }
        console.log(videoList);
    }, [fetchVideos, videoList, movie, open, loading]);

    function getImage() {
        return baseUrl + backdropSizes + movie.poster_path;
    }

    function getValidGenres(movie) {
        let validGenres = [];
        movie.genre_ids.forEach((id) => {
            let genre = genres.find((genre) => genre.id === id);
            if (genre) validGenres.push(genre.name);
        });
        return validGenres;
    }

    const getTrailerKey = useCallback(() => {
        if (videoList.length > 0) {
            const videoKey = videoList.find((video) => video.type === 'Trailer').key;
            return videoKey ? videoKey : videoList[0].key;
        }
        return null;
    }, [videoList]);

    function toogleTrailerModal() {
        setDisplayVideo((prev) => !prev);
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
            <Fade in={open} timeout={{ enter: 500, exit: 300 }}>
                <div className={styles.paper}>
                    <img className={styles.image} src={getImage()} alt={`${movie.title || movie.name}_img`} />
                    <div className={styles.info}>
                        <div className={styles.closeButton} title='Fechar'>
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
                                    {getValidGenres(movie).map((genreName, index) => (
                                        <span key={index}>
                                            {index > 0 ? ', ' : null}
                                            {genreName}
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
                        <div className={styles.footer}>
                            <Nota className={styles.nota} movie={movie} />
                            {videoList.length > 0 && (
                                <Button
                                    className={styles.playTrailerButton}
                                    onClick={toogleTrailerModal}
                                    title='Assistir Trailer'
                                >
                                    <PlayArrowIcon className={styles.playTrailerIcon} />
                                    <Typography className={styles.playTrailerText}>trailer</Typography>
                                </Button>
                            )}
                        </div>
                        <Modal
                            open={displayVideo}
                            onClose={toogleTrailerModal}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                transitionDuration: 500,
                                classes: { root: styles.trailerBackdrop },
                            }}
                        >
                            <Fade in={displayVideo} timeout={{ enter: 300, exit: 300 }}>
                                <div className={styles.videoBox}>
                                    <iframe
                                        title={getTrailerKey()}
                                        allowFullScreen='allowfullscreen'
                                        className={styles.videoFrame}
                                        src={`https://www.youtube.com/embed/${getTrailerKey()}`}
                                        frameBorder='0'
                                    />
                                </div>
                            </Fade>
                        </Modal>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default MovieInfo;
