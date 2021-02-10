import React, { useEffect } from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import useStyles from './styles';
import useChangePage from './../../hooks/useChangePage';

const Trending = () => {
    const [mvList, mvloading, mvError, fetchMvList] = useFetch(apiData.trending('movie'));
    const [tvList, tvLoading, tvError, fetchTvList] = useFetch(apiData.trending('tv'));
    const [extPage, intPage, changePage] = useChangePage();
    const styles = useStyles();

    useEffect(() => {
        fetchMvList(apiData.trending('movie'));
        fetchTvList(apiData.trending('tv'));
    }, [fetchMvList, fetchTvList]);

    function isLoading() {
        return mvloading || tvLoading;
    }

    function hasError() {
        return mvError || tvError;
    }

    return (
        <div className={styles.root}>
            {isLoading() && <Loading />}
            {!isLoading() && hasError() && <Error Message={mvError || tvError} />}
            {!isLoading() && !hasError() && (
                <>
                    <h1>Trending</h1>
                    <h2>Movies</h2>
                    <MovieList list={mvList} intPage={intPage} changePage={changePage} />
                    <h2>TV Shows</h2>
                    <MovieList list={tvList} intPage={intPage} changePage={changePage} />
                </>
            )}
        </div>
    );
};

export default Trending;
