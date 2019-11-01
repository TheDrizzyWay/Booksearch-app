import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from './Book';
import PropTypes from 'prop-types';

class BookList extends Component {
    render () {
        const { props: { books, searchTerm } } = this;
        if (!searchTerm.length) return <h1>Enter book title or author name</h1>;
        return (
            books.length ? (
              <>
                <Grid container spacing={24} style={{ padding: 24, justifyContent: 'space-between' }}>
                    {books.map(book => (
                        <Grid key={`${book.id}${book.etag}`}>
                            <Book key={book.id} {...book} />
                        </Grid>
                    ))}
                </Grid>
                </>
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
