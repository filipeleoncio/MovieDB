import { createContext } from 'react';

const DataContext = createContext( {
    configuration: null,
    baseUrl: null,
    backdropSizes: '',
} );

export default DataContext;
