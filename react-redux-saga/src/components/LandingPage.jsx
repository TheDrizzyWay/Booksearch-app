import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../actions/bookActions';
import SearchAppBar from './Header';
import BookList from './BookList';

class LandingPage extends Component {
    componentDidMount () {
        const target = this.target;
        const observer = new IntersectionObserver(this.handleObserver, {
            root: null,
            threshold: 1
        });
        observer.observe(target);
    }

    handleObserver = (entities, options) => {
        const { fetchBooks, searchTerm, startIndex } = this.props;
        if (searchTerm) fetchBooks(searchTerm, startIndex);
    }

    render () {
        const { books, searchTerm } = this.props;
        return (
      <>
      <SearchAppBar />
      <BookList books={books} searchTerm={searchTerm} />
      <div className="target" ref={ref => (this.target = ref)}>Loading...</div>
      </>
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

LandingPage.propTypes = {
    books: PropTypes.array,
    searchTerm: PropTypes.string,
    fetchBooks: PropTypes.func,
    startIndex: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
