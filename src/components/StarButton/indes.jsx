import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const StarButton = ({ filled }) => {
    return filled ? <StarIcon /> : <StarBorderIcon />;
};

export default StarButton;
