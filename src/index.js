import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
  NewsScreen, 
  NewestScreen, 
  AskScreen, 
  ItemScreen, 
  UserScreen, 
  SubmitScreen, 
  UserSubmissionsScreen, 
  UserCommentsScreen, 
  VotedSubmissionsScreen,
  VotedCommentsScreen,
  } from './components/stateful/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={NewsScreen}/>
      <Route exact path="/newest" component={NewestScreen}/>
      <Route exact path="/ask" component={AskScreen}/>
      <Route exact path="/item/:id" component={ItemScreen}/>
      <Route exact path="/user/:id" component={UserScreen}/>
      <Route exact path="/submit" component={SubmitScreen}/>
      <Route exact path="/user/:id/contributions" component={UserSubmissionsScreen}/>
      <Route exact path="/user/:id/comments" component={UserCommentsScreen}/>
      <Route exact path="/user/:id/votedSubmissions" component={VotedSubmissionsScreen}/>
      <Route exact path="/user/:id/votedComments" component={VotedCommentsScreen}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
