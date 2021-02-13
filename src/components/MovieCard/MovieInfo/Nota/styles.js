import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        textAlign: 'center',
        width: '125px',
    },
    star: {
        paddingTop: '11px',
        paddingRight: '3px',
        color: 'gold',
    },
    icon: {
        fontSize: '3.3rem',
    },
    values: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    superior: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: '-8px',
    },
    nota: {
        fontSize: '30px',
    },
    maxNota: {
        fontSize: '13px',
        paddingBottom: '5px',
        color: '#6b6b6b',
    },
    inferior: {
        fontSize: '13px',
        color: 'silver',
    },
});

export default useStyles;
