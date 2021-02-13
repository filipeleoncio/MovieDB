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
    },
    info: {
        height: '100%',
        width: '45%',
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 40,
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
    },
    image: {
        height: '100%',
    },
    nota: {
        width: '200',
        height: 'auto',
    },
}));

export default useStyles;
