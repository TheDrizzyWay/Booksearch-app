import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SearchAppBar from './components/Header';
import BookList from './components/BookList';
import store from './store';
import './App.css';

class App extends Component {
  searchBook = (userinput) => {

  };

  render () {
      const { books, searchTerm } = this.state;
      return (
          <Provider store={store}>
            <>
            <SearchAppBar searchBook={this.searchBook}/>
            <BookList books={books} searchTerm={searchTerm} />
            </>
          </Provider>
      );
  }
}

export default App;
