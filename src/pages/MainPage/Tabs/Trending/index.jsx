import React, { useEffect, useRef, useState } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useFetch from '../../../../hooks/useFetch';
import apiData from '../../../../services/apiData';
import useStyles from './styles';
import useChangePage from '../../../../hooks/useChangePage';
import clsx from 'clsx';
import SwitchButton from './SwitchButton';

const Trending = () => {
    const [mvList, mvloading, mvError, fetchMvList] = useFetch();
    const [tvList, tvLoading, tvError, fetchTvList] = useFetch();
    const { intPage: mvIntPage, changePage: mvChangePage } = useChangePage();
    const { intPage: tvIntPage, changePage: tvChangePage } = useChangePage();

    const [mvListAllLoaded, setMvListAllLoaded] = useState(false);
    const [tvListAllLoaded, setTvListAllLoaded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const styles = useStyles();

    const firstRender = useRef(false);

    const [selected, setSelected] = useState('movie');

    useEffect(() => {
        fetchMvList(apiData.trending('movie'));
        fetchTvList(apiData.trending('tv'));
    }, [fetchMvList, fetchTvList]);

    useEffect(() => {
        if ((selected === 'movie' && mvListAllLoaded) || (selected === 'tv' && tvListAllLoaded)) {
            firstRender.current = true;
            setImagesLoaded(true);
        }
    }, [mvListAllLoaded, tvListAllLoaded, selected, imagesLoaded]);

    function isLoading() {
        return mvloading || tvLoading;
    }

    function hasError() {
        return mvError || tvError;
    }

    return (
        <>
            {(isLoading() || !imagesLoaded) && !hasError() && <Loading />}
            {!isLoading() && hasError() && <Error Message={mvError || tvError} />}
            {!isLoading() && !hasError() && (
                <>
                    <div
                        className={clsx(styles.tabTitle, styles.smoothComponent, {
                            [styles.smoothComponentLoaded]: firstRender.current,
                        })}
                    >
                        <h1>Trending</h1>
                        <SwitchButton
                            value={selected}
                            setValue={setSelected}
                            setImagesLoaded={setImagesLoaded}
                            setMvListAllLoaded={setMvListAllLoaded}
                            setTvListAllLoaded={setTvListAllLoaded}
                        />
                    </div>
                    <div className={clsx(styles.smoothComponent, { [styles.smoothComponentLoaded]: imagesLoaded })}>
                        {selected === 'movie' && (
                            <MovieList
                                list={mvList}
                                intPage={mvIntPage}
                                changePage={mvChangePage}
                                setAllImagesLoaded={setMvListAllLoaded}
                            />
                        )}
                        {selected === 'tv' && (
                            <MovieList
                                list={tvList}
                                intPage={tvIntPage}
                                changePage={tvChangePage}
                                setAllImagesLoaded={setTvListAllLoaded}
                            />
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Trending;
