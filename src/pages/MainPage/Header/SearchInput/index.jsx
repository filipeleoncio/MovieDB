import React, { useRef } from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';
import { debounce } from '@material-ui/core';
import clsx from 'clsx';

const SearchInput = ({ onChange, onCleanClick }) => {
    const styles = useStyles();
    const inputRef = useRef();

    // const debounceOnChange = useCallback(debounce(onChange, 3000), [onChange]);

    // const inputOnChange = useCallback(
    //     (event) => {
    //         debounce(onChange, 3000)(event);
    //     },
    //     [onChange],
    // );

    function getInputValue() {
        console.log(inputRef);
        const inputField = inputRef.current;
        return inputField ? inputField.value : '';
    }

    function cleanInput() {
        if (inputRef.current) inputRef.current.value = '';
        onCleanClick();
    }

    return (
        <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                inputRef={inputRef}
                id='inputField'
                placeholder='Search movie'
                onChange={debounce(onChange, 300)}
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
