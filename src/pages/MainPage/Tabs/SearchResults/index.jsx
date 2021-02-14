import React, { useEffect } from 'react';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import MovieList from '../../../../components/MovieList';
import useStyles from './styles';
import useChangePage from './../../../../hooks/useChangePage';

const SearchResults = ({ searchListProps }) => {
    const { searchList, loading, error, setPage } = searchListProps;
    const { extPage, intPage, changePage } = useChangePage();
    const styles = useStyles();

    function showError() {
        return error || (!loading && searchList.length === 0);
    }

    useEffect(() => {
        setPage(extPage);
    }, [extPage, setPage]);

    return (
        <div className={styles.root}>
            {loading && <Loading />}
            {showError() && <Error Message={'Filme não encontrado'} />}
            {!loading && !showError() && (
                <>
                    <h1>Filmes Encontrados:</h1>
                    <MovieList list={searchList} extPage={extPage} intPage={intPage} changePage={changePage} />
                </>
            )}
        </div>
    );
};

export default SearchResults;
