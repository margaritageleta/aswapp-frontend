import React, { Component } from 'react';
import Nav from '../Nav';
import './App.css';
import { render } from 'react-dom';
import 'whatwg-fetch';

class App extends Component {
  state = {
    message: ''
  }

  componentDidMount() {
    fetch(
      'http://127.0.0.1:8000/api/items/', {
        mode: 'cors',
          method: 'options', 
          headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Authorization': 'Api-Key ssuIkXyp.yDPz6hc1NqxHnTj53GQKY6soxP2ZRQiN'
          }), 
          credentials: 'same-origin', // you need to add this line
        }
      ).then(response => {
      if (response.status >= 400) {
        console.log('ERROR');
        return this.setState(() => {
          return { message: 'ERROR' };
        });
      }
    })
  }

  

  // The length of the array: {this.state.series.length}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav desc = "Ejemplo 1"/>
          <Nav desc = "Ejemplo 2"/>
          
        </header>
      </div>
    );
  }
}

export default App;
