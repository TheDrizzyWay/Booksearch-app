import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render () {
        return (
          <>
          <h1>Welcome to the Drizzy Bookfinder</h1>
          <img src="sample.jpg" />
          </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
