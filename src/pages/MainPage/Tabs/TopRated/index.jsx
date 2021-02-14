import React, { useEffect } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useFetch from '../../../../hooks/useFetch';
import apiData from '../../../../services/apiData';
import useStyles from './styles';
import useChangePage from '../../../../hooks/useChangePage';

const TopRated = () => {
    const [movieList, loading, error, fetchMovies] = useFetch();
    const { extPage, intPage, changePage } = useChangePage();
    const styles = useStyles();

    useEffect(() => {
        fetchMovies(apiData.topRated(extPage));
    }, [extPage, fetchMovies]);

    return (
        <div className={styles.root}>
            {loading && <Loading />}
            {error && <Error Message={error} />}
            {!loading && !error && (
                <>
                    <h1>TopRated Movies</h1>
                    <MovieList list={movieList} extPage={extPage} intPage={intPage} changePage={changePage} />
                </>
            )}
        </div>
    );
};

export default TopRated;
