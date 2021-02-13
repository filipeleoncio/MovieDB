import React from 'react';
import useStyles from './styles';
import StarIcon from '@material-ui/icons/Star';

function titleMessage(m1, m2) {
    return m1 + ' based on ' + m2 + ' user ratings';
}

const Nota = ({ movie }) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.star}>
                <StarIcon className={styles.icon} />
            </div>
            <div className={styles.values}>
                <div className={styles.superior}>
                    <div className={styles.nota} title={titleMessage(movie.vote_average, movie.vote_count)}>
                        {movie.vote_average}
                    </div>
                    <div className={styles.maxNota}>/10</div>
                </div>
                <div className={styles.inferior}>{movie.vote_count}</div>
            </div>
        </div>
    );
};

export default Nota;
