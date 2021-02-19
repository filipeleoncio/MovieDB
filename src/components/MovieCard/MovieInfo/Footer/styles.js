import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nota: {
        width: '200',
        height: 'auto',
    },
    trailerBackdrop: {
        backgroundColor: 'rgb(0 0 0 / 90%)',
    },
    videoBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '75vw',
        height: 'calc(75vw/16*9)',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
    },
    videoFrame: {
        width: '100%',
        height: '100%',
    },
    playTrailerButton: {
        width: '22%',
        height: '70%',
        marginRight: 20,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30,
        border: '1px solid white',
        color: 'white',
        transition: '.3s ease-in-out background-color, .3s ease-in-out border-color',
        '&:hover': {
            color: 'white',
            backgroundColor: 'red',
            borderColor: 'red',
        },
    },
    playTrailerIcon: {
        padding: 0,
        fontSize: '3.0rem',
        marginLeft: -18,
    },
    playTrailerText: {
        fontSize: 15,
        marginRight: -10,
        paddingLeft: 5,
    },
});

export default useStyles;
