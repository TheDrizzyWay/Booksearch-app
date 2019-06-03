import React, { Component } from 'react';
import axios from 'axios';
import SearchAppBar from './components/Header';
import BookList from './components/BookList';
import './App.css';

const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

class App extends Component {
    componentDidMount () {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.onScroll, false);
    }

  state = {
      books: [],
      searchTerm: '',
      totalItems: 0,
      startIndex: 0
  }

  searchBook = (userinput) => {
      axios.get(`${searchUrl}?q=${userinput}&startIndex=0`)
          .then(res => {
              this.setState({
                  books: res.data.items || [],
                  searchTerm: userinput,
                  totalItems: res.data.totalItems
              });
          })
          .catch(err => console.log(err));
  };

  paginatedSearch = () => {
      const { searchTerm, startIndex, books } = this.state;
      axios.get(`${searchUrl}?q=${searchTerm}&startIndex=${startIndex + 10}`)
          .then(res => {
              this.setState({
                  books: books.concat(res.data.items),
                  startIndex: startIndex + 10
              });
          })
          .catch(err => console.log(err));
  }

  onScroll = () => {
      if (
          (window.innerHeight + window.scrollY) >= (document.body.offsetHeight) &&
      this.state.books.length
      ) {
          this.paginatedSearch();
      }
  }

  render () {
      const { books, searchTerm } = this.state;
      return (
          <>
          <SearchAppBar searchBook={this.searchBook}/>
          <BookList books={books} searchTerm={searchTerm} />
          </>
      );
  }
}

export default App;
