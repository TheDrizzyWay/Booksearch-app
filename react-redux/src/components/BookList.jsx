import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Book from './Book';
import PropTypes from 'prop-types';

class BookList extends Component {
    render () {
        const { props: { books, searchTerm } } = this;
        if (!searchTerm.length) return <h1>Enter book title or author name</h1>;
        return (
            books.length ? (
                <Grid container spacing={24} style={{ padding: 24 }}>
                    {books.map(book => (
                        <Grid item xs={12} sm={8} lg={4} xl={3}>
                            <Book key={book.id} {...book} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <h1> No results found for {searchTerm}</h1>
            )
        );
    }
}

const mapStateToProps = state => ({
    books: state.books.books,
    searchTerm: state.books.searchTerm
});

BookList.propTypes = {
    books: PropTypes.array,
    searchTerm: PropTypes.string
};

export default connect(mapStateToProps)(BookList);
