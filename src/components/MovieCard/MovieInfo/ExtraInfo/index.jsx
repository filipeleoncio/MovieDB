import React from 'react';
import { useDataContext } from '../../../store/Provider';
import useStyles from './styles';

const ExtraInfo = ({ movie }) => {
    const { genres } = useDataContext();
    const styles = useStyles();

    function getValidGenres(movie) {
        let validGenres = [];
        movie.genre_ids.forEach((id) => {
            let genre = genres.find((genre) => genre.id === id);
            if (genre) validGenres.push(genre.name);
        });
        return validGenres;
    }

    return (
        <div className={styles.bottom}>
            <p>
                Genre:
                <span className={styles.subInfoValue}>
                    {getValidGenres(movie).map((genreName, index) => (
                        <span key={index}>
                            {index > 0 ? ', ' : null}
                            {genreName}
                        </span>
                    ))}
                </span>
            </p>
            <p>
                Release Date:
                <span className={styles.subInfoValue}>{movie.release_date || movie.first_air_date}</span>
            </p>
            <p>
                Popularity:<span className={styles.subInfoValue}> {movie.popularity}</span>
            </p>
        </div>
    );
};

export default ExtraInfo;
