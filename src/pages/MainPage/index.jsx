import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Popular from './Tabs/Popular';
import TopRated from './Tabs/TopRated';
import Trending from './Tabs/Trending';
import Favorites from './Tabs/Favorites';
import useStyles from './styles';
import TabItem from './TabItem';
import StyledTab from './TabManager/StyledTab';
import StyledTabs from './TabManager/StyledTabs';
import SearchInput from '../../components/SearchInput';
import SearchResults from './Tabs/SearchResults';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

const tabIndex = {
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

const MainPage = () => {
    const styles = useStyles();
    const [value, setValue] = useState(0);
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
        if (value !== tabIndex.SEARCH) setValue(tabIndex.SEARCH);
        setSearchedMovie(event.target.value);
    }

    useEffect(() => {
        if (searchedMovie === '') {
            setValue(tabIndex.TRENDING);
        } else {
            fetchList(apiData.searchMovie(searchedMovie, page));
        }
    }, [page, fetchList, searchedMovie]);

    return (
        <>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Movies DB</h1>
                <Button className={styles.loginButton}>Login</Button>
                <SearchInput onChange={inputOnChange} />
            </div>

            <div className={styles.tabs}>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label='Trending' {...a11yProps(0)} />
                    <StyledTab label='Popular' {...a11yProps(1)} />
                    <StyledTab label='Top Rated' {...a11yProps(2)} />
                    <StyledTab label='Favorites' {...a11yProps(3)} />
                    <StyledTab label='Search' {...a11yProps(4)} disabled={searchedMovie === ''} />
                </StyledTabs>
                <Typography className={styles.padding} />
                <TabItem value={value} index={tabIndex.TRENDING}>
                    <Trending />
                </TabItem>
                <TabItem value={value} index={tabIndex.POPULAR}>
                    <Popular />
                </TabItem>
                <TabItem value={value} index={tabIndex.TOP_RATED}>
                    <TopRated />
                </TabItem>
                <TabItem value={value} index={tabIndex.FAVORITES}>
                    <Favorites />
                </TabItem>
                <TabItem value={value} index={tabIndex.SEARCH}>
                    <SearchResults searchListProps={searchListProps} />
                </TabItem>
            </div>
        </>
    );
};

export default MainPage;
