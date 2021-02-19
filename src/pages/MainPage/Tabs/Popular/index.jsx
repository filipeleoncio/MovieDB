import React, { useEffect, useState } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useFetch from '../../../../hooks/useFetch';
import apiData from '../../../../services/apiData';
import useStyles from './styles';
import useChangePage from '../../../../hooks/useChangePage';
import clsx from 'clsx';

const Popular = () => {
    const [movieList, loading, error, fetchMovies] = useFetch();
    const { extPage, intPage, changePage } = useChangePage();
    const styles = useStyles();
    const [listAllLoaded, setListAllLoaded] = useState(false);

    useEffect(() => {
        fetchMovies(apiData.popular(extPage));
    }, [extPage, fetchMovies]);

    useEffect(() => setListAllLoaded(false), [extPage]);

    return (
        <>
            {(loading || !listAllLoaded) && !error && <Loading />}
            {error && <Error Message={error} />}
            <div className={clsx(styles.smoothComponent, { [styles.smoothComponentLoaded]: listAllLoaded })}>
                {!loading && !error && (
                    <>
                        <h1>Popular Movies</h1>
                        <MovieList
                            list={movieList}
                            extPage={extPage}
                            intPage={intPage}
                            changePage={changePage}
                            setAllImagesLoaded={setListAllLoaded}
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default Popular;
