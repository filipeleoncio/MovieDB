import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( {
    root: {
        width: '19.5%',
        padding: 4,
        backgroundColor: 'black',
        color: 'white ',
    },
    cardContent: {
        padding: 0,
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    nota: {
        fontSize: 14,
        '& > p': {
            margin: ' 0 auto ',
        },
    },
    image: {
        width: '100%',
    }
} );

export default useStyles;