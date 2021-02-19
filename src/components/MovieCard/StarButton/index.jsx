import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import useStyles from './styles';

const StarButton = ({ filled }) => {
    const styles = useStyles();

    return filled ? <StarIcon className={styles.selected} /> : <StarBorderIcon className={styles.unselected} />;
};

export default StarButton;
