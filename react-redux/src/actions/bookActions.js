import axios from 'axios';
const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

export const FETCH_BOOKS = 'FETCH_BOOKS';

export const fetchBooks = (userinput) => dispatch => {
    axios.get(`${searchUrl}?q=${userinput}`)
        .then(res => dispatch({
            type: FETCH_BOOKS,
            payload: res.data.items || [],
            searchTerm: userinput
        }))
        .catch(err => console.log(err));
};
