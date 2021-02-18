import React from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';
import { debounce } from '@material-ui/core';
import clsx from 'clsx';

const SearchInput = ({ onChange, onCleanClick }) => {
    const styles = useStyles();
    // const [value, setValue] = useState('');

    const debounceOnChange = debounce(onChange, 300);

    // const debounceOnChange = useCallback(() => debounce(() => onChange(value), 1000), [onChange]);
    // const debounceOnChange = useMemo((value) => debounce(() => onChange(value), 1000), [onChange]);

    // function inputOnChange(event) {
    //     setValue(event.target.value);
    //     debounceOnChange(event.target.value);
    // }

    // const onChange = e => {
    //     setUserQuery(e.target.value);
    //     delayedQuery(e.target.value);
    //   };
    // const delayedQuery = useCallback(() => debounce((q) => sendQuery(q), 500), [sendQuery]);

    function getInputValue() {
        return document.getElementById('inputField') ? document.getElementById('inputField').value : null;
    }

    function cleanInput() {
        // setValue('');
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
                placeholder='Buscar filme'
                // onChange={inputOnChange}
                onChange={debounceOnChange}
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                // value={value}
            />
            <div
                className={clsx(styles.cleanButton, { [styles.cleanButtonShow]: getInputValue() !== '' })}
                title={getInputValue() !== '' ? 'Limpar' : null}
            >
                {/* <div
                className={clsx(styles.cleanButton, { [styles.cleanButtonShow]: value !== '' })}
                title={value !== '' ? 'Limpar' : null}
            > */}
                <CloseIcon onClick={cleanInput} />
            </div>
        </div>
    );
};

export default SearchInput;
