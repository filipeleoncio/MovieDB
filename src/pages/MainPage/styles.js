import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pageHeader: {
        display: 'flex',
        height: 65,
        justifyContent: 'space-between',
        position: 'relative',
        // flexDirection: 'column',
        alignItems: 'center',
    },
    pageTitle: {
        // justifySelf: 'flex-start',
        // textAlign: 'center',
        fontFamily: 'Garamond',
        fontSize: '2.3rem',
    },
    loginButton: {
        // justifySelf: 'flex-end',
        // position: 'absolute',
        color: 'white',
        // top: 20,
        // right: 10,
        // display: 'flex',
        // justifySelf: 'center',
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
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#2e1534',
    },
}));

export default useStyles;
