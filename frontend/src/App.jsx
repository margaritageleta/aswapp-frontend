import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import './App.css';

import { createStore } from 'redux';

class App extends Component {
  constructor() {
    super();
  }
  /*
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/items/')
      .then(response => {
      if (response.status >= 400) {
        console.log('ERROR');
        return this.setState(() => {
          return { message: 'ERROR' };
        });
      } else {
        this.setState({ items : response.data });
        console.log(this.state.items);
      }
    })
  }
 */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi</h1>
        </header>
      </div>
    );
  }
}

export default App;

const initialState = {
    result: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state, // give all props and add them as props
                result: state.result + action.payload // override props
            };
        case 'SUBTRACT':
            return {
                ...state,
                result: state.result - action.payload
            };
        default:
            return state; // New State of App
    }
};

// createStore (reducer, initialAppState)
const store = createStore (reducer);

// Whenever the store is updated
// Execute the action in subscribe
store.subscribe(() => {
    console.log('Store updated!', store.getState())
});

// Disptach an action - the action we send
// trigger an action to a payload
store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
  type: 'ADD',
  payload: 100
});

