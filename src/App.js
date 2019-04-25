import React, { Component } from 'react';
import axios from 'axios';
import SearchAppBar from './components/Header';
import './App.css';

const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

class App extends Component {
  state = {
      books: []
  }

  searchBook = (userinput) => {
      axios.get(`${searchUrl}?q=${userinput}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
  };

  render () {
      return (
          <>
          <SearchAppBar searchBook={this.searchBook}/>
          </>
      );
  }
}

export default App;
