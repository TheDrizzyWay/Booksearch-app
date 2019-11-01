import axios from 'axios';
const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

export const FETCH_BOOKS = 'FETCH_BOOKS';

export const fetchBooks = (userinput, startIndex) => dispatch => {
    axios.get(`${searchUrl}?q=${userinput}&startIndex=${startIndex}`)
        .then(res => dispatch({
            type: FETCH_BOOKS,
            payload: res.data.items || [],
            searchTerm: userinput,
            startIndex: startIndex + 10
        }))
        .catch(err => console.log(err));
};
