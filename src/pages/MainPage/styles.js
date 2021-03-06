import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    tabs: {
        flexGrow: 1,
    },
    tabContent: {
        padding: '0px 24px',
    },
    padding: {
        padding: theme.spacing(3),
    },
}));

export default useStyles;
