import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bottom: {
        fontSize: 20,
        '& > p': {
            margin: '5px auto',
        },
    },
    subInfoValue: {
        fontSize: 17,
        color: 'gray',
        paddingLeft: 10,
    },
}));

export default useStyles;
