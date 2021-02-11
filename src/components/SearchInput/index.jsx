import React from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { debounce } from '@material-ui/core';

const SearchInput = ({ onChange }) => {
    const styles = useStyles();

    const debounceOnChange = debounce(onChange, 300);

    return (
        <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder='Buscar filme'
                onChange={debounceOnChange}
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};

export default SearchInput;
