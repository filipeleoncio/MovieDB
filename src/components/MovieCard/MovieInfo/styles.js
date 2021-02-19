import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontFamily: theme.typography.fontFamily,
    },
    overview: {
        fontSize: 25,
        marginTop: 20,
        color: 'gray',
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
}));

export default useStyles;
