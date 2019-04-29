import React, { Component } from 'react';
import axios from 'axios';
import SearchAppBar from './components/Header';
import BookList from './components/BookList';
import './App.css';

const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

class App extends Component {
  state = {
      books: [],
      searchTerm: ''
  }

  searchBook = (userinput) => {
      axios.get(`${searchUrl}?q=${userinput}`)
          .then(res => this.setState({
              books: res.data.items || [],
              searchTerm: userinput
          }))
          .catch(err => console.log(err));
  };

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
