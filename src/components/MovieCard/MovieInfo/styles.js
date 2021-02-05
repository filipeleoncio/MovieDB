import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( ( theme ) => ( {
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
    },
    paper: {
        backgroundColor: '#212121',
        boxShadow: theme.shadows[ 5 ],
        padding: theme.spacing( 2, 0, 2, 0 ),
        width: '65%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    info: {
        height: '90%',
        width: '45%',
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 50,
        // height: '20%',
        // fontSize: 'auto',
        fontFamily: theme.typography.fontFamily,
    },
    overview: {
        fontSize: 25,
        marginTop: 20,
    },
    bottom: {
        fontSize: 20,
        '& > p': {
            margin: ' 0 auto ',
        },
    },
    nota: {
        fontSize: 14,
        '& > p': {
            margin: ' 0 auto ',
        },
    },
    closeButton: {
        height: '50%',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    iconSize: {
        fontSize: '2.5rem',
    },
    image: {
        height: '90%',
    }

} ) );

export default useStyles;
