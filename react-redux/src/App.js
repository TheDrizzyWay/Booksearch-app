import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SearchAppBar from './components/Header';
import BookList from './components/BookList';
import store from './store';
import './App.css';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
            <>
            <SearchAppBar />
            <BookList />
            </>
            </Provider>
        );
    }
}

export default App;
