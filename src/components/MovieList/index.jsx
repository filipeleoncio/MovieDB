import React, { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
// import { useDataContext } from './../store/Provider';
import clsx from 'clsx';
// import { useImageContext } from '../store/ImageProvider';

// const MOVIES_PER_PAGE = 20;
const MOVIES_PER_STEP = 5;
// const MOVIES_RENDER_PER_STEP = 15;

const MovieList = ({ list, extPage, intPage, changePage }) => {
    const styles = useStyles();
    // const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const carrouselRef = useRef();
    // const { setAllImagesLoaded } = useImageContext();

    // const debounceSetLoaded = debounce(() => setAllImagesLoaded(true), 2000);

    // useEffect(() => {
    //     console.log('loadedImages:', loadedImagesCount);
    //     debounceSetLoaded();
    // }, [loadedImagesCount, debounceSetLoaded]);

    // const listaExibida = useMemo(() => {
    //     let inicial = page * moviesPorPag;
    //     let final = page * moviesPorPag + moviesPorPag;
    //     return list.slice(inicial, final);
    // }, [page, list]);

    // const MovieCardList = useMemo(
    //     () =>
    //         list.map((movie, index) => <MovieCard key={index} movie={movie} setLoadedImages={setLoadedImagesCount} />),
    //     [list, setLoadedImagesCount],
    // );

    const MovieCardList = useMemo(() => list.map((movie, index) => <MovieCard key={index} movie={movie} />), [list]);

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

    return (
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
    );
};

export default MovieList;
