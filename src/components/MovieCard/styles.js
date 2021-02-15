import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: '19.5%',
        minWidth: '19.5%',
        padding: 5,
        height: 310,
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
        fontSize: 15,
        height: '10%',
    },
    image: {
        width: '100%',
        '&:hover': {
            width: '115%',
            zIndex: 1,
            alignSelf: 'center',
            cursor: 'pointer',
        },
    },
    inferior: {
        display: 'flex',
        height: '13%',
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
});

export default useStyles;
