import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Popular from './Tabs/Popular';
import TopRated from './Tabs/TopRated';
import Trending from './Tabs/Trending';
import Favorites from './Tabs/Favorites';
import useStyles from './styles';
import StyledTab from './TabManager/StyledTab';
import StyledTabs from './TabManager/StyledTabs';
import SearchResults from './Tabs/SearchResults';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import Header from './Header';
import { Typography } from '@material-ui/core';
import PATH_NAMES from './../../utils/pathNames';
import TAB_INDEX from '../../utils/tabIndex';

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

function getTabValue(pathname) {
    switch (pathname) {
        case PATH_NAMES.TRENDING:
            return TAB_INDEX.TRENDING;
        case PATH_NAMES.POPULAR:
            return TAB_INDEX.POPULAR;
        case PATH_NAMES.TOP_RATED:
            return TAB_INDEX.TOP_RATED;
        case PATH_NAMES.FAVORITES:
            return TAB_INDEX.FAVORITES;
        case PATH_NAMES.SEARCH:
            return TAB_INDEX.TRENDING;
        default:
            return TAB_INDEX.TRENDING;
    }
}

const MainPage = () => {
    const styles = useStyles();
    const history = useHistory();
    const [value, setValue] = useState(getTabValue(history.location.pathname));
    const [searchedMovie, setSearchedMovie] = useState('');
    const [searchList, loading, error, fetchList] = useFetch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (searchedMovie === '') {
            if (history.location.pathname === PATH_NAMES.SEARCH) {
                setValue(TAB_INDEX.TRENDING);
                history.push(PATH_NAMES.TRENDING);
            }
        } else {
            fetchList(apiData.searchMovie(searchedMovie, page));
        }
    }, [page, fetchList, searchedMovie, history]);

    const searchListProps = {
        searchList: searchList,
        loading: loading,
        error: error,
        setPage: setPage,
    };

    function handleChange(_, newValue) {
        setValue(newValue);
    }

    function redirect(path, newIndex) {
        setValue(newIndex);
        return history.push(path);
    }

    function defaultTab() {
        const path = history.location.pathname;
        return path === PATH_NAMES.START ? path : PATH_NAMES.TRENDING;
    }

    return (
        <>
            <Header value={value} setValue={setValue} setSearchedMovie={setSearchedMovie} />
            <div className={styles.tabs}>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab
                        label='Trending'
                        {...a11yProps(TAB_INDEX.TRENDING)}
                        onClick={() => redirect(PATH_NAMES.TRENDING, TAB_INDEX.TRENDING)}
                    />
                    <StyledTab
                        label='Popular'
                        {...a11yProps(TAB_INDEX.POPULAR)}
                        onClick={() => redirect(PATH_NAMES.POPULAR, TAB_INDEX.POPULAR)}
                    />
                    <StyledTab
                        label='Top Rated'
                        {...a11yProps(TAB_INDEX.TOP_RATED)}
                        onClick={() => redirect(PATH_NAMES.TOP_RATED, TAB_INDEX.TOP_RATED)}
                    />
                    <StyledTab
                        label='Favorites'
                        {...a11yProps(TAB_INDEX.FAVORITES)}
                        onClick={() => redirect(PATH_NAMES.FAVORITES, TAB_INDEX.FAVORITES)}
                    />
                    <StyledTab
                        label='Search'
                        {...a11yProps(TAB_INDEX.SEARCH)}
                        disabled={searchedMovie === ''}
                        onClick={() => redirect(PATH_NAMES.SEARCH, TAB_INDEX.SEARCH)}
                    />
                </StyledTabs>
                <Typography className={styles.padding} />
                <div className={styles.tabContent}>
                    <Switch>
                        <Route path={defaultTab()} exact component={Trending} />
                        <Route path={PATH_NAMES.POPULAR} exact component={Popular} />
                        <Route path={PATH_NAMES.TOP_RATED} exact component={TopRated} />
                        <Route path={PATH_NAMES.FAVORITES} exact component={Favorites} />
                        <Route path={PATH_NAMES.SEARCH} exact>
                            <SearchResults searchListProps={searchListProps} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default MainPage;
