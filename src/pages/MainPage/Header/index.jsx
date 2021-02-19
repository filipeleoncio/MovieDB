import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import PATH_NAMES from '../../../utils/pathNames';
import TAB_INDEX from '../../../utils/tabIndex';
import useStyles from './styles';
import SearchInput from './SearchInput/index';

const Header = ({ value, setValue, setSearchedMovie }) => {
    const styles = useStyles();
    const history = useHistory();

    function inputOnChange(event) {
        setSearchedMovie(event.target.value);
        if (event.target.value !== '') {
            if (value !== TAB_INDEX.SEARCH) setValue(TAB_INDEX.SEARCH);
            history.push(PATH_NAMES.SEARCH);
        }
    }

    function inputClean() {
        setSearchedMovie('');
    }

    return (
        <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Movie DB</h1>
            <SearchInput onChange={inputOnChange} onCleanClick={inputClean} />
            <Button className={styles.loginButton}>Login</Button>
        </div>
    );
};

export default Header;
