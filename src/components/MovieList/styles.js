import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        scrollBehavior: 'smooth',
        overflow: 'hidden',
        paddingTop: 50,
    },
    pageButton: {
        position: 'absolute',
        display: 'flex',
        alignSelf: 'center',
        color: 'white',
        zIndex: 2,
        padding: 20,
    },
    nextButton: {
        right: 1,
    },
    prevButton: {
        left: 1,
    },
    iconSize: {
        fontSize: '2.5rem',
    },
    iconDisabled: {
        color: 'rgba(0, 0, 0, 0.26)',
    },
});

export default useStyles;
