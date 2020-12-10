import React, { Component } from 'react';
import Nav from '../Nav';
import './App.css';
import { render } from 'react-dom';
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Api-Key ssuIkXyp.yDPz6hc1NqxHnTj53GQKY6soxP2ZRQiN';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
        items: [],
    };
  }

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

  // The length of the array: {this.state.series.length}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.items.map(item => {
            return <li>{item.title}</li> 
          })}
        </header>
      </div>
    );
  }
}

export default App;
