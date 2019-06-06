import { FETCH_BOOKS } from '../actions/bookActions';

const initialState = {
    books: [],
    searchTerm: '',
    startIndex: 0
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                books: state.books.concat(action.payload),
                searchTerm: action.searchTerm,
                startIndex: action.startIndex
            };
        default:
            return state;
    }
};

export default booksReducer;
