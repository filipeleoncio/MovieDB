import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: '19.5%',
        minWidth: '19.5%',
        padding: 5,
        height: 330,
        backgroundColor: 'black',
        color: 'white ',
        overflow: 'visible',
    },
    cardContent: {
        padding: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        height: '13%',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        transition: '.2s ease-in-out width, z-index 0.2s step-end',
        zIndex: 0,
        alignSelf: 'center',
        '&:hover': {
            width: '115%',
            zIndex: 1,
            cursor: 'pointer',
            transition: '.2s ease-in-out width, z-index step-start',
        },
    },
    inferior: {
        display: 'flex',
        height: '13%',
        justifyContent: 'space-between',
    },
    nota: {
        fontSize: 16,
        '& > p': {
            margin: ' 0 auto ',
        },
    },
    inferiorValue: {
        paddingLeft: 4,
        color: 'gray',
    },
});

export default useStyles;
