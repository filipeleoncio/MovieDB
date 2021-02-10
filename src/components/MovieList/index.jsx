import React, { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { useDataContext } from './../store/Provider';
import clsx from 'clsx';

// const MOVIES_PER_PAGE = 20;
const MOVIES_PER_STEP = 5;
// const MOVIES_RENDER_PER_STEP = 15;

const MovieList = ({ list, extPage, intPage, changePage }) => {
    const styles = useStyles();
    const { baseUrl, backdropSizes } = useDataContext();
    const carrouselRef = useRef();

    // const listaExibida = useMemo(() => {
    //     let inicial = page * moviesPorPag;
    //     let final = page * moviesPorPag + moviesPorPag;
    //     return list.slice(inicial, final);
    // }, [page, list]);

    const getImage = useCallback((movie) => baseUrl + backdropSizes + movie.backdrop_path, [baseUrl, backdropSizes]);

    const MovieCardList = useMemo(
        () => list.map((movie, index) => <MovieCard key={index} movie={movie} img={getImage(movie)} />),
        [list, getImage],
    );

    const scrollCarrousel = useCallback((_page) => {
        if (carrouselRef.current) {
            const step = carrouselRef.current.offsetWidth + 5;
            carrouselRef.current.scrollLeft = _page * step;
        }
    }, []);

    useLayoutEffect(() => {
        scrollCarrousel(intPage);
        console.log('page atual', intPage);
    }, [scrollCarrousel, intPage]);

    const lastStep = (list.length ? list.length / MOVIES_PER_STEP : 0) - 1;

    const isNextButtoDisable = (intPage === lastStep && !extPage) || list.length < MOVIES_PER_STEP;
    const isPrevButtoDisable = (intPage === 0 && (extPage === 1 || !extPage)) || list.length < MOVIES_PER_STEP;

    if (list.length > 0) {
        return (
            <>
                <div className={styles.root} ref={carrouselRef}>
                    {MovieCardList}
                    <IconButton
                        className={clsx(styles.pageButton, styles.nextButton)}
                        classes={{ disabled: styles.iconDisabled }}
                        aria-label='next'
                        // onClick={() => setPage((p) => p + 1)}
                        // onClick={() => doStep('next')}
                        onClick={() => changePage('next')}
                        disabled={isNextButtoDisable}
                    >
                        <ArrowForwardIosIcon className={styles.iconSize} />
                    </IconButton>
                    <IconButton
                        className={clsx(styles.pageButton, styles.prevButton)}
                        classes={{ disabled: styles.iconDisabled }}
                        aria-label='prev'
                        // onClick={() => setPage((p) => p - 1)}
                        // onClick={() => doStep('prev')}
                        onClick={() => changePage('prev')}
                        disabled={isPrevButtoDisable}
                    >
                        <ArrowBackIosIcon className={styles.iconSize} />
                    </IconButton>
                </div>
            </>
        );
    }
    return null;
};

export default MovieList;
