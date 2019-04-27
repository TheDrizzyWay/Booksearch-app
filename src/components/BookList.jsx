import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookList extends Component {
    render () {
        const { props: { books, searchTerm } } = this;
        if (!searchTerm.length) return <h1>Enter your book name or author</h1>;
        return (
            books.length ? (
                books.map(book => <h1>{book.volumeInfo.title}</h1>)
            ) : (
                <h1> No results found for {searchTerm}</h1>
            )
        );
    }
}

BookList.propTypes = {
    books: PropTypes.array,
    searchTerm: PropTypes.string
};

export default BookList;
