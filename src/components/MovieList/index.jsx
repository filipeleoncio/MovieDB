import React, { useEffect, useMemo, useState } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { useDataContext } from './../store/Provider';

const moviesPorPag = 5;

const MovieList = ( { list } ) => {
    const styles = useStyles();
    const [ pag, setPag ] = useState( 0 );
    const { baseUrl, backdropSizes } = useDataContext();
    // const [ imagesLoaded, setImagesLoaded ] = useState( false );
    // const [ countLoaded, setCountLoaded ] = useState( 0 );
    // const [ imgArray, setImgArray ] = useState( [] );

    const listaExibida = useMemo( () => {
        let inicial = pag * moviesPorPag;
        let final = pag * moviesPorPag + moviesPorPag;
        return list.slice( inicial, final );
    }, [ pag, list ] );

    // const onLoadArray = useMemo( () => {
    // useMemo( () => {
    //     let array = [];
    //     if ( list.length > 0 ) {
    //         list.forEach( ( movie ) => {
    //             const img = new Image();
    //             img.src = baseUrl + backdropSizes + movie.backdrop_path;
    //             console.log( "buscando imagem" );
    //             img.onload = () => {
    //                 console.log( "imagem carregada" );
    //                 array.push( '1' );
    //                 setCountLoaded( ( count ) => count + 1 );
    //                 setImgArray( [ ...imgArray, img ] );
    //             }
    //         } );
    //         return array;
    //     }
    // }, [ list, baseUrl, backdropSizes ] );

    // useEffect( () => {
    //     console.log( onLoadArray );
    //     console.log( onLoadArray.length );
    //     if ( onLoadArray.length === 20 )
    //         setImagesLoaded( true );
    // }, [ onLoadArray, setImagesLoaded ] );

    // useEffect( () => {
    //     console.log( countLoaded );
    //     if ( countLoaded === 20 )
    //         setImagesLoaded( true );
    // }, [ countLoaded, setImagesLoaded ] );

    // useEffect( () => {
    //     console.log( imgArray );
    //     if ( imgArray.length === 20 )
    //         setImagesLoaded( true );
    // }, [ imgArray, setImagesLoaded ] );

    // function getImage ( index ) {
    //     return imgArray[ pag * moviesPorPag + index ];
    // }

    function getImage ( movie ) {
        return baseUrl + backdropSizes + movie.backdrop_path;
    }

    function changePage ( page ) {
        if ( page === 'next' && pag + 1 < list.length / moviesPorPag )
            setPag( ( pag ) => pag + 1 );
        if ( page === 'prev' && pag - 1 >= 0 )
            setPag( ( pag ) => pag - 1 );
    }


    if ( list.length > 0 ) {
        return (
            <div className={ styles.root }>
                { listaExibida.map( ( movie, index ) => (
                    <MovieCard key={ index } movie={ movie } img={ getImage( movie ) } />
                ) ) }
                <IconButton className={ styles.nextPageButton } aria-label="next" onClick={ () => changePage( 'next' ) }>
                    <ArrowForwardIosIcon className={ styles.iconSize } />
                </IconButton>
                <IconButton className={ styles.prevPageButton } aria-label="prev" onClick={ () => changePage( 'prev' ) }>
                    <ArrowBackIosIcon className={ styles.iconSize } />
                </IconButton>
            </div>
        );
    }
    return null;
}

export default MovieList;
