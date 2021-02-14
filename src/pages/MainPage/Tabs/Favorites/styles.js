import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: 600,
    },
    smoothComponent: {
        transition: '.5s ease-in-out opacity',
        opacity: 0,
    },
    smoothComponentLoaded: {
        opacity: 1,
    },
});

export default useStyles;
