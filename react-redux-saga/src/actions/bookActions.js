export const FETCH_BOOKS = 'FETCH_BOOKS';
export const UPDATE_BOOKS = 'UPDATE_BOOKS';

export const fetchBooks = (userinput, startIndex) => ({
    type: FETCH_BOOKS,
    // dispatch loading or other stuff
    userinput,
    startIndex
});

