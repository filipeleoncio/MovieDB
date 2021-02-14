import React, { useEffect } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useFetch from '../../../../hooks/useFetch';
import apiData from '../../../../services/apiData';
import useStyles from './styles';
import useChangePage from '../../../../hooks/useChangePage';
// import { useImageContext } from '../../../../components/store/ImageProvider';

const Trending = () => {
    const [mvList, mvloading, mvError, fetchMvList] = useFetch(apiData.trending('movie'));
    const [tvList, tvLoading, tvError, fetchTvList] = useFetch(apiData.trending('tv'));
    const { intPage: mvIntPage, changePage: mvChangePage } = useChangePage();
    const { intPage: tvIntPage, changePage: tvChangePage } = useChangePage();
    // const { allImagesLoaded } = useImageContext();
    const styles = useStyles();

    useEffect(() => {
        fetchMvList(apiData.trending('movie'));
        fetchTvList(apiData.trending('tv'));
    }, [fetchMvList, fetchTvList]);

    // useEffect(() => {
    //     console.log(allImagesLoaded ? 'allImagesLoaded' : 'allImagesLoading');
    // }, [allImagesLoaded]);

    function isLoading() {
        // console.log('loading');
        return mvloading || tvLoading;
    }

    function hasError() {
        return mvError || tvError;
    }

    useEffect(() => {
        ///precache images
        //so liberar dps q todas as imagens do component loadarem na cache
    }, [mvList]);

    useEffect(() => {
        ///precache images
    }, [tvList]);

    return (
        <div className={styles.root}>
            {isLoading() && <Loading />}
            {!isLoading() && hasError() && <Error Message={mvError || tvError} />}
            {!isLoading() && !hasError() && (
                <>
                    <h1>Trending</h1>
                    <h2>Movies</h2>
                    <MovieList list={mvList} intPage={mvIntPage} changePage={mvChangePage} />
                    <h2>TV Shows</h2>
                    <MovieList list={tvList} intPage={tvIntPage} changePage={tvChangePage} />
                </>
            )}
        </div>
    );
};

export default Trending;
