import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    smoothComponent: {
        opacity: 0,
        transition: '.5s ease-in-out opacity',
    },
    smoothComponentLoaded: {
        opacity: 1,
    },
});

export default useStyles;
