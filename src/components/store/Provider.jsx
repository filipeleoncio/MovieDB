import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import apiData from '../../services/apiData';
import useStorage from '../../hooks/useStorage';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [listaFavoritos, setListaFavoritos] = useStorage('listaFavoritos');
    const [configuration, setConfiguration] = useState(null);
    const [genres, setGenres] = useState([]);
    const backdropSizes = 'original';

    if (!listaFavoritos) setListaFavoritos([]);

    const baseUrl = useMemo(() => {
        return configuration ? configuration.data.images.base_url : null;
    }, [configuration]);

    const getConfiguration = useCallback(async () => {
        try {
            const config = await api.get(apiData.config);
            setConfiguration(config);
        } catch (err) {
            const error = 'Erro app -> getConfiguration; Erro: ' + err;
            console.log(error);
            throw err;
        }
    }, []);

    const getGenres = useCallback(async () => {
        try {
            const res = await api.get(apiData.genres);
            setGenres(res.data.genres);
        } catch (err) {
            const error = 'Erro app -> getGenres; Erro: ' + err;
            console.log(error);
            throw err;
        }
    }, []);

    useEffect(() => {
        getConfiguration();
        getGenres();
    }, [getConfiguration, getGenres]);

    return (
        <DataContext.Provider
            value={{
                configuration,
                baseUrl,
                backdropSizes,
                genres,
                listaFavoritos,
                setListaFavoritos,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
};

export default DataProvider;
