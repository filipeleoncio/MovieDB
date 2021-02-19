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
        right: 7,
        opacity: 0,
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
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '17ch',
            },
        },
    },
}));

export default useStyles;
