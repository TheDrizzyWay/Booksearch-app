import React, { Component } from 'react';
import SearchAppBar from './Header';
import BookList from './BookList';

class LandingPage extends Component {
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
        return (
      <>
      <SearchAppBar />
      <BookList />
      <div ref={ref => (this.target = ref)}>Loading...</div>
      </>
        );
    }
}

export default LandingPage;
