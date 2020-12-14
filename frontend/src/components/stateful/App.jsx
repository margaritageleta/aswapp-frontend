import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// the Provider provides the store
import store from '../../redux/store';
import { Provider } from 'react-redux';
import Items from './Items';
import Item from './Item';
import Comments from './Comments';
import User from './User';
import Nav from '../stateless/Nav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Provider store={ store }>
        <AppBar color="primary" position="static" style={{ margin: 0 }}>
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              HackerNews
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <div>
          <header>
            <Items type={'ALL'} userId={''} voted={false} />

          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
