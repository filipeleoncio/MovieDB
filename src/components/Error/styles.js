import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: '5.5rem',
    },
});

export default useStyles;
