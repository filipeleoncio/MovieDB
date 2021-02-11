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
        cursor: 'pointer',
    },
    cardContent: {
        padding: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        height: '10%',
    },
    image: {
        width: '100%',
        '&:hover': {
            width: '115%',
            zIndex: 1,
            alignSelf: 'center',
        },
    },
    inferior: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    nota: {
        fontSize: 14,
        '& > p': {
            margin: ' 0 auto ',
        },
    },
    botaoFavoritar: {
        color: 'white',
    },
    selected: {
        color: 'yellow',
    },
});

export default useStyles;
