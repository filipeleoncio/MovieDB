import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageHeader: {
        display: 'flex',
        height: 110,
        justifyContent: 'space-between',
        position: 'relative',
        alignItems: 'center',
    },
    pageTitle: {
        paddingLeft: 20,
        fontFamily: 'Garamond',
        fontSize: '2.3rem',
    },
    loginButton: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: '1rem',
        fontFamily: 'Serif',
    },
});

export default useStyles;
