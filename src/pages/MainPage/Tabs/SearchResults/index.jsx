import React, { useEffect, useState } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useStyles from './styles';
import useChangePage from './../../../../hooks/useChangePage';
import clsx from 'clsx';

const SearchResults = ({ searchListProps }) => {
    const { searchList, loading, error, setPage } = searchListProps;
    const { extPage, intPage, changePage } = useChangePage();
    const styles = useStyles();
    const [listAllLoaded, setListAllLoaded] = useState(false);

    function showError() {
        return error || (!loading && searchList.length === 0);
    }

    useEffect(() => {
        setPage(extPage);
    }, [extPage, setPage]);

    useEffect(() => setListAllLoaded(false), [extPage]);

    return (
        <div className={styles.root}>
            {(loading || !listAllLoaded) && <Loading />}
            {showError() && <Error Message={'Filme não encontrado'} />}
            <div className={clsx(styles.smoothComponent, { [styles.smoothComponentLoaded]: listAllLoaded })}>
                {!loading && !showError() && (
                    <>
                        <h1>Filmes Encontrados:</h1>
                        <MovieList
                            list={searchList}
                            extPage={extPage}
                            intPage={intPage}
                            changePage={changePage}
                            setAllImagesLoaded={setListAllLoaded}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
