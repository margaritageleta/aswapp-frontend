import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Items from './Items';
import Item from './Item';
// import Comments from './Comments';
import User from './User';
import Nav from '../stateless/Nav';
import { useParams } from 'react-router-dom'


const NewsScreen = () => {
	return (
		<div>
        <Nav/>
			<Items type={'ALL'} userId={''} voted={false}/>
		</div>
	)
};

const NewestScreen = () => {
	return (
		<div>
        <Nav/>
			<Items type={'URL'} userId={''} voted={false}/>
		</div>
	)
};

const AskScreen = () => {
	return (
		<div>
        <Nav/>
			<Items type={'ASK'} userId={''} voted={false}/>
		</div>
	)
};

const ItemScreen = () => {
  let { id } = useParams()
  return (
		<div>
        <Nav/>   
        <Item id={id} less={false}/>
		</div>
	)
};

const UserScreen = () => {
	let { id } = useParams()
	return (
		  <div>
		  <Nav/>   
		  <User id={id}/>
		  </div>
	  )
  };

export { NewsScreen, NewestScreen, AskScreen, ItemScreen, UserScreen };
