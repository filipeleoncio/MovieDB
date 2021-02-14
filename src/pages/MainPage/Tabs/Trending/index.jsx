import React, { useEffect, useState } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useFetch from '../../../../hooks/useFetch';
import apiData from '../../../../services/apiData';
import useStyles from './styles';
import useChangePage from '../../../../hooks/useChangePage';
import clsx from 'clsx';

const Trending = () => {
    const [mvList, mvloading, mvError, fetchMvList] = useFetch(apiData.trending('movie'));
    const [tvList, tvLoading, tvError, fetchTvList] = useFetch(apiData.trending('tv'));
    const { intPage: mvIntPage, changePage: mvChangePage } = useChangePage();
    const { intPage: tvIntPage, changePage: tvChangePage } = useChangePage();

    const [mvListAllLoaded, setMvListAllLoaded] = useState(false);
    const [tvListAllLoaded, setTvListAllLoaded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const styles = useStyles();

    useEffect(() => {
        fetchMvList(apiData.trending('movie'));
        fetchTvList(apiData.trending('tv'));
    }, [fetchMvList, fetchTvList]);

    useEffect(() => {
        if (mvListAllLoaded) console.log('mv loaded');
        if (tvListAllLoaded) console.log('tv loaded');
        if (mvListAllLoaded && tvListAllLoaded) {
            console.log('all images loaded');
            setImagesLoaded(true);
        }
    }, [mvListAllLoaded, tvListAllLoaded]);

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
            <div className={clsx(styles.smoothComponent, { [styles.smoothComponentLoaded]: imagesLoaded })}>
                {!isLoading() && !hasError() && (
                    <>
                        <h1>Trending</h1>
                        <h2>Movies</h2>
                        <MovieList
                            list={mvList}
                            intPage={mvIntPage}
                            changePage={mvChangePage}
                            setAllImagesLoaded={setMvListAllLoaded}
                        />
                        <h2>TV Shows</h2>
                        <MovieList
                            list={tvList}
                            intPage={tvIntPage}
                            changePage={tvChangePage}
                            setAllImagesLoaded={setTvListAllLoaded}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Trending;
