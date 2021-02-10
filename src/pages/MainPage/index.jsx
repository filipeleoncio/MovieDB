import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Popular from '../Popular';
import TopRated from '../TopRated';
import Trending from '../Trending';
import useStyles from './styles';
import TabItem from './TabItem';
import StyledTab from './TabManager/StyledTab';
import StyledTabs from './TabManager/StyledTabs';
import SearchInput from '../../components/SearchInput';
import Favorites from '../Favorites';
import SearchResults from '../SearchResults';
import useFetch from '../../hooks/useFetch';
import apiData from '../../services/apiData';

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
    // const [ page, setPage ] = useState( 1 );
    const page = 1;
    const searchListProps = {
        searchList: searchList,
        loading: loading,
        error: error,
    };

    function handleChange(_, newValue) {
        setValue(newValue);
    }

    function inputOnChange(event) {
        if (value !== 4) setValue(4);
        setSearchedMovie(event.target.value);
    }

    useEffect(() => {
        if (searchedMovie === '') {
            setValue(0);
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
                    <StyledTab label='Search' {...a11yProps(4)} />
                </StyledTabs>
                <Typography className={styles.padding} />
                <TabItem value={value} index={0}>
                    <Trending />
                </TabItem>
                <TabItem value={value} index={1}>
                    <Popular />
                </TabItem>
                <TabItem value={value} index={2}>
                    <TopRated />
                </TabItem>
                <TabItem value={value} index={3}>
                    <Favorites />
                </TabItem>
                <TabItem value={value} index={4}>
                    <SearchResults searchListProps={searchListProps} />
                </TabItem>
            </div>
        </>
    );
};

export default MainPage;
