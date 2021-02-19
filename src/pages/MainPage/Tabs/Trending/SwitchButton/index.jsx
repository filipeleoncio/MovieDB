import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './styles';

const SwitchButton = ({ value, setValue, setImagesLoaded, setMvListAllLoaded, setTvListAllLoaded }) => {
    const styles = useStyles();

    function handleChange(event) {
        const newSelected = event.target.value;
        if (newSelected === 'movie') setMvListAllLoaded(false);
        if (newSelected === 'tv') setTvListAllLoaded(false);
        setImagesLoaded(false);
        setValue(newSelected);
    }

    return (
        <FormControl component='fieldset' className={styles.root}>
            <RadioGroup aria-label='type' name='Type' value={value} onChange={handleChange}>
                <FormControlLabel
                    value='movie'
                    control={<Radio classes={{ checked: styles.buttonColor }} />}
                    label='Movies'
                />
                <FormControlLabel
                    value='tv'
                    control={<Radio classes={{ checked: styles.buttonColor }} />}
                    label='Tv Shows'
                />
            </RadioGroup>
        </FormControl>
    );
};

export default SwitchButton;
