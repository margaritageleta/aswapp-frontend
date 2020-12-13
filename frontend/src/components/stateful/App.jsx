import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// the Provider provides the store
import store from '../../redux/store';
import { Provider } from 'react-redux';
import ItemsList from './ItemsList';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <h1>HackerNews</h1>
            <ItemsList />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
