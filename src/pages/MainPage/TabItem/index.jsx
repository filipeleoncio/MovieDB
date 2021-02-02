import React from 'react';
import { Box } from '@material-ui/core';

const TabItem = ( props ) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `scrollable-prevent-tabpanel-${ index }` }
            aria-labelledby={ `scrollable-prevent-tab-${ index }` }
            { ...other }
        >
            {value === index && (
                <Box p={ 3 }>
                    { children }
                </Box>
            ) }
        </div>
    );
}

export default TabItem;
