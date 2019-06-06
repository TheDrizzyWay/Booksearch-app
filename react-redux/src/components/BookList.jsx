import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Book from './Book';
import PropTypes from 'prop-types';
import { fetchBooks } from '../actions/bookActions';

class BookList extends Component {
    componentDidMount () {
        const { fetchBooks, searchTerm, startIndex } = this.props;
        const callback = () => {
            //console.log('calling');
            fetchBooks(searchTerm, startIndex);
        };
        const observer = new IntersectionObserver(callback, { threshold: 0 });
        const target = this.target;
        observer.observe(target);
    }
    render () {
        const { props: { books, searchTerm } } = this;
        if (!searchTerm.length) return <h1>Enter book title or author name</h1>;
        return (
            books.length ? (
              <>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    {books.map(book => (
                        <Grid key={`${book.id}${book.etag}`}>
                            <Book key={book.id} {...book} />
                        </Grid>
                    ))}
                </Grid>
                <div ref={ref => (this.target = ref)}>Loading...</div>
                </>
            ) : (
                <h1> No results found for {searchTerm}</h1>
            )
        );
    }
}

const mapStateToProps = state => ({
    books: state.books.books,
    searchTerm: state.books.searchTerm,
    startIndex: state.books.startIndex
});

const mapDispatchToProps = {
    fetchBooks: fetchBooks
};

BookList.propTypes = {
    books: PropTypes.array,
    searchTerm: PropTypes.string,
    fetchBooks: PropTypes.func,
    startIndex: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
