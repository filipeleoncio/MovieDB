import React, { useCallback, useLayoutEffect, useEffect, useMemo, useRef, useState } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import clsx from 'clsx';

// const MOVIES_PER_PAGE = 20;
const MOVIES_PER_STEP = 5;
// const MOVIES_RENDER_PER_STEP = 15;

const MovieList = ({ list, extPage, intPage, changePage, setAllImagesLoaded }) => {
    const styles = useStyles();
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const [minimumLoaded, setMinimumLoaded] = useState(0);
    const carrouselRef = useRef();

    const condition1 = loadedImagesCount === list.length && list.length > 0;
    const condition2 = minimumLoaded === 5;

    const result = condition1 || condition2;

    useEffect(() => {
        if (result) {
            setAllImagesLoaded(true);
        }
    }, [result, list, setAllImagesLoaded]);

    // const listaExibida = useMemo(() => {
    //     let inicial = page * moviesPorPag;
    //     let final = page * moviesPorPag + moviesPorPag;
    //     return list.slice(inicial, final);
    // }, [page, list]);

    const MovieCardList = useMemo(
        () =>
            list.map((movie, index) => (
                <MovieCard
                    key={index}
                    index={index}
                    movie={movie}
                    setLoadedImages={setLoadedImagesCount}
                    setMinimumLoaded={setMinimumLoaded}
                />
            )),
        [list, setLoadedImagesCount],
    );

    const scrollCarrousel = useCallback((_page) => {
        if (carrouselRef.current) {
            const step = carrouselRef.current.offsetWidth + 5;
            carrouselRef.current.scrollLeft = _page * step;
        }
    }, []);

    useLayoutEffect(() => {
        scrollCarrousel(intPage);
    }, [scrollCarrousel, intPage]);

    const lastStep = (list.length ? list.length / MOVIES_PER_STEP : 0) - 1;

    const isNextButtoDisable = (intPage >= lastStep && !extPage) || list.length < MOVIES_PER_STEP;
    const isPrevButtoDisable = (intPage === 0 && (extPage === 1 || !extPage)) || list.length < MOVIES_PER_STEP;

    const MovieListMemo = useMemo(
        () => (
            <div className={styles.root} ref={carrouselRef}>
                {MovieCardList}
                <IconButton
                    className={clsx(styles.pageButton, styles.nextButton)}
                    classes={{ disabled: styles.iconDisabled }}
                    aria-label='next'
                    onClick={() => changePage('next')}
                    disabled={isNextButtoDisable}
                >
                    <ArrowForwardIosIcon className={styles.iconSize} />
                </IconButton>
                <IconButton
                    className={clsx(styles.pageButton, styles.prevButton)}
                    classes={{ disabled: styles.iconDisabled }}
                    aria-label='prev'
                    onClick={() => changePage('prev')}
                    disabled={isPrevButtoDisable}
                >
                    <ArrowBackIosIcon className={styles.iconSize} />
                </IconButton>
            </div>
        ),
        [MovieCardList, changePage, isNextButtoDisable, isPrevButtoDisable, styles],
    );

    return <>{MovieListMemo}</>;
};

export default MovieList;
