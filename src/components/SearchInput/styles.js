import { makeStyles, fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        borderRadius: 20,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: '0 !important',
        height: 35,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(1),
        //     width: 'auto',
        // },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        marginTop: 3,
        alignSelf: 'center',
        pointerEvents: 'none',
    },
    cleanButton: {
        marginTop: 3,
        position: 'relative',
        alignSelf: 'center',
        opacity: 0,
        right: 7,
        transition: '.5s ease-in-out opacity',
    },
    cleanButtonShow: {
        opacity: 1,
        cursor: 'pointer',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        // justifyContent: 'center',
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '10ch',
            '&:focus': {
                width: '18ch',
            },
        },
    },
}));

export default useStyles;
