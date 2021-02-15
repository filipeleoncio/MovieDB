import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: 800,
        position: 'relative',
    },
    smoothComponent: {
        opacity: 0,
    },
    smoothComponentLoaded: {
        transition: '.5s ease-in-out opacity',
        opacity: 1,
    },
});

export default useStyles;
