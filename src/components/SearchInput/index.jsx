import React, { useState } from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';
import { debounce } from '@material-ui/core';
import clsx from 'clsx';

const SearchInput = ({ onChange, onCleanClick }) => {
    const styles = useStyles();
    const [value, setValue] = useState('');

    const debounceOnChange = debounce(onChange, 300);

    function inputOnChange(event) {
        setValue(event.target.value);
        debounceOnChange(event);
    }

    function cleanInput() {
        setValue('');
        onCleanClick();
    }
    return (
        <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder='Buscar filme'
                onChange={inputOnChange}
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={value}
            />
            <div className={clsx(styles.cleanButton, { [styles.cleanButtonShow]: value !== '' })}>
                <CloseIcon onClick={cleanInput} />
            </div>
        </div>
    );
};

export default SearchInput;
