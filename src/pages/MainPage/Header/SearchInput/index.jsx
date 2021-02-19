import React from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';
import { debounce } from '@material-ui/core';
import clsx from 'clsx';

const SearchInput = ({ onChange, onCleanClick }) => {
    const styles = useStyles();

    const debounceOnChange = debounce(onChange, 300);

    function getInputValue() {
        return document.getElementById('inputField') ? document.getElementById('inputField').value : '';
    }

    function cleanInput() {
        document.getElementById('inputField').value = '';
        onCleanClick();
    }

    return (
        <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                id='inputField'
                placeholder='Search movie'
                onChange={debounceOnChange}
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div
                className={clsx(styles.cleanButton, { [styles.cleanButtonShow]: getInputValue() !== '' })}
                title={getInputValue() !== '' ? 'Clear' : null}
            >
                <CloseIcon onClick={cleanInput} />
            </div>
        </div>
    );
};

export default SearchInput;
