import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDataContext } from './../../store/Provider';
import ExtraInfo from './ExtraInfo';
import Footer from './Footer';

const MovieInfo = ({ movie, open, setStatus }) => {
    const styles = useStyles();
    const { baseUrl, originalBackdropSize: backdropSizes } = useDataContext();
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

    function getImage() {
        return baseUrl + backdropSizes + movie.poster_path;
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
                        <ExtraInfo movie={movie} />
                        <Footer movie={movie} trailerModalOpen={open} />
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default MovieInfo;
