import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
    },
    paper: {
        backgroundColor: '#212121',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 0, 2, 0),
        width: '65%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        outline: 'none',
    },
    info: {
        height: '100%',
        width: '52%',
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        // height: '20%',
        // fontSize: 'auto',
        fontFamily: theme.typography.fontFamily,
    },
    overview: {
        fontSize: 25,
        marginTop: 20,
        color: 'gray',
    },
    bottom: {
        fontSize: 20,
        '& > p': {
            margin: '5px auto',
        },
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subInfo: {
        fontSize: 20,
        paddingRight: 30,
    },
    subInfoValue: {
        fontSize: 17,
        color: 'gray',
        paddingLeft: 10,
    },
    closeButton: {
        height: '50%',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    iconSize: {
        fontSize: '2.5rem',
        color: 'gray',
        transition: '.3s ease-in-out color',
        '&:hover': {
            color: 'white',
        },
    },
    image: {
        height: '100%',
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
            '& $playTrailerIcon': {
                // color: 'red',
            },
        },
    },
    playTrailerIcon: {
        padding: 0,
        fontSize: '3.0rem',
        marginLeft: -18,
        // paddingRight: 10,
        // color: 'white',
        // transition: '.3s ease-in-out color',
    },
    playTrailerText: {
        fontSize: 15,
        marginRight: -10,
        paddingLeft: 5,
    },
}));

export default useStyles;
