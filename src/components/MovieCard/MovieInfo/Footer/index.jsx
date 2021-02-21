import React, { useCallback, useEffect, useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Nota from './Nota';
import useStyles from './styles';
import { Backdrop, Button, Fade, Modal, Typography } from '@material-ui/core';
import useFetch from '../../../../hooks/useFetch';
import apiData from '../../../../services/apiData';

const Footer = ({ movie, trailerModalOpen }) => {
    const [videoList, loading, error, fetchVideos] = useFetch();
    const [displayVideo, setDisplayVideo] = useState(false);
    const styles = useStyles();

    useEffect(() => {
        if (trailerModalOpen && videoList.length === 0 && loading) {
            if (movie.media_type) {
                fetchVideos(apiData.videos(movie.media_type, movie.id));
            } else {
                if (!error) fetchVideos(apiData.videos('movie', movie.id));
            }
        }
    }, [fetchVideos, videoList, movie, trailerModalOpen, loading, error]);

    const getTrailerKey = useCallback(() => {
        if (videoList.length > 0) {
            const trailer = videoList.find((video) => video.type === 'Trailer');
            return trailer ? trailer.key : videoList[0].key;
            // return videoKey ? videoKey : videoList[0].key;
        }
        return null;
    }, [videoList]);

    function toogleTrailerModal() {
        setDisplayVideo((prev) => !prev);
    }

    return (
        <>
            <div className={styles.footer}>
                <Nota className={styles.nota} movie={movie} />
                {videoList.length > 0 && (
                    <Button className={styles.playTrailerButton} onClick={toogleTrailerModal} title='Watch Trailer'>
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
        </>
    );
};

export default Footer;
