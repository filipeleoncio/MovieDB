import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Popular from './Tabs/Popular';
import TopRated from './Tabs/TopRated';
import Trending from './Tabs/Trending';
import Favorites from './Tabs/Favorites';
import useStyles from './styles';
import StyledTab from './TabManager/StyledTab';
import StyledTabs from './TabManager/StyledTabs';
import SearchInput from '../../components/SearchInput';
import SearchResults from './Tabs/SearchResults';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';
import { Switch, Route, useHistory } from 'react-router-dom';
import PATH_NAMES from './../../utils/pathNames';

const TAB_INDEX = {
    TRENDING: 0,
    POPULAR: 1,
    TOP_RATED: 2,
    FAVORITES: 3,
    SEARCH: 4,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

function getTabValue(pathname) {
    switch (pathname) {
        case '/trending':
            return TAB_INDEX.TRENDING;
        case '/popular':
            return TAB_INDEX.POPULAR;
        case '/top-rated':
            return TAB_INDEX.TOP_RATED;
        case '/favorites':
            return TAB_INDEX.FAVORITES;
        case '/search':
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

    const searchListProps = {
        searchList: searchList,
        loading: loading,
        error: error,
        setPage: setPage,
    };

    function handleChange(_, newValue) {
        setValue(newValue);
    }

    function inputOnChange(event) {
        if (value !== TAB_INDEX.SEARCH) setValue(TAB_INDEX.SEARCH);
        setSearchedMovie(event.target.value);
        history.push(PATH_NAMES.search);
    }

    useEffect(() => {
        if (searchedMovie === '') {
            if (history.location.pathname === '/search') {
                setValue(TAB_INDEX.TRENDING);
                //goback-replace
                history.push(PATH_NAMES.trending);
            }
        } else {
            fetchList(apiData.searchMovie(searchedMovie, page));
        }
    }, [page, fetchList, searchedMovie, history]);

    function redirect(path, newIndex) {
        // if (path === PATH_NAMES.SEARCH) oldValue = value;
        setValue(newIndex);
        return history.push(path);
    }

    function defaultTab() {
        const path = history.location.pathname;
        if (path === '/') return path;
        return PATH_NAMES.trending;
    }
    return (
        <>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Movies DB</h1>
                <SearchInput onChange={inputOnChange} />
                <Button className={styles.loginButton}>Login</Button>
            </div>

            <div className={styles.tabs}>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab
                        label='Trending'
                        {...a11yProps(TAB_INDEX.TRENDING)}
                        onClick={() => redirect('/trending', TAB_INDEX.TRENDING)}
                    />
                    <StyledTab
                        label='Popular'
                        {...a11yProps(TAB_INDEX.POPULAR)}
                        onClick={() => redirect('/popular', TAB_INDEX.POPULAR)}
                    />
                    <StyledTab
                        label='Top Rated'
                        {...a11yProps(TAB_INDEX.TOP_RATED)}
                        onClick={() => redirect('/top-rated', TAB_INDEX.TOP_RATED)}
                    />
                    <StyledTab
                        label='Favorites'
                        {...a11yProps(TAB_INDEX.FAVORITES)}
                        onClick={() => redirect('/favorites', TAB_INDEX.FAVORITES)}
                    />
                    <StyledTab
                        label='Search'
                        {...a11yProps(TAB_INDEX.SEARCH)}
                        disabled={searchedMovie === ''}
                        onClick={() => redirect('/search', TAB_INDEX.SEARCH)}
                    />
                </StyledTabs>
                {/* <Typography className={styles.padding} /> */}
                <div className={styles.tabContent}>
                    <Switch>
                        <Route path={defaultTab()} exact component={Trending} />
                        <Route path={PATH_NAMES.popular} exact component={Popular} />
                        <Route path={PATH_NAMES.topRated} exact component={TopRated} />
                        <Route path={PATH_NAMES.favorites} exact component={Favorites} />
                        <Route path={PATH_NAMES.search} exact>
                            <SearchResults searchListProps={searchListProps} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default MainPage;
