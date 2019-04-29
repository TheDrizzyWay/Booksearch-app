import { FETCH_BOOKS } from '../actions/bookActions';

const initialState = {
    books: [],
    searchTerm: ''
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                books: action.payload,
                searchTerm: action.searchTerm
            };
        default:
            return state;
    }
};

export default booksReducer;
