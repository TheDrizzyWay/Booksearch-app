import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import store from './store';
import './App.css';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <LandingPage />
            </Provider>
        );
    }
}

export default App;
