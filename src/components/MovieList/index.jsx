import React, { useCallback, useLayoutEffect, useEffect, useMemo, useRef, useState } from 'react';
import MovieCard from '../MovieCard';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import clsx from 'clsx';
import { MOVIES_PER_STEP } from '../../utils/listParams';

const MovieList = ({ list, extPage, intPage, changePage, setAllImagesLoaded }) => {
    const styles = useStyles();
    const [minimumLoaded, setMinimumLoaded] = useState(0);
    const carrouselRef = useRef();

    const condition = minimumLoaded === 5;

    useEffect(() => {
        if (condition) {
            setAllImagesLoaded(true);
        }
    }, [condition, list, setAllImagesLoaded]);

    const MovieCardList = useMemo(
        () =>
            list.map((movie, index) => (
                <MovieCard key={index} index={index} movie={movie} setMinimumLoaded={setMinimumLoaded} />
            )),
        [list],
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
