import { useState } from 'react';

const LIST_SIZE = 20;
const MOVIES_PER_STEP = 5;

function useChangePage() {
    const [extPage, setExtPage] = useState(1);
    const [intPage, setIntPage] = useState(0);
    const lastStep = LIST_SIZE / MOVIES_PER_STEP - 1;

    const changePage = (action) => {
        if (action === 'next') {
            if (intPage === lastStep) {
                setExtPage((p) => p + 1);
                setIntPage(0);
            } else {
                setIntPage((p) => p + 1);
            }
        } else {
            if (intPage === 0 && extPage > 1) {
                setExtPage((p) => p - 1);
                setIntPage(lastStep);
            } else {
                setIntPage((p) => p - 1);
            }
        }
    };

    return [extPage, intPage, changePage];
}

export default useChangePage;
