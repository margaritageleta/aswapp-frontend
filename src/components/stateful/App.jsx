import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Items from './Items';
import Item from './Item';
// import Comments from './Comments';
import User from './User';
import Nav from '../stateless/Nav';
import Submit from '../stateless/Submit';

import { useParams } from 'react-router-dom'
import { idClient } from '../../config/axios';
import Comments from './Comments'

const NewsScreen = () => {
	return (
		<div>
        <Nav />
			<Items type={'ALL'} userId={''} voted={false} />
		</div>
	)
};

const NewestScreen = () => {
	return (
		<div>
        <Nav />
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

const SubmitScreen = () => {
	return (
		<div>
        <Nav/>
			<Submit/>
		</div>

	) 
};

const ItemScreen = () => {
  let { id } = useParams()
  return (
		<div>
        <Nav />   
        	<Item id={id} less={false}/>
		</div>
	)
};

const UserScreen = () => {
	let { id } = useParams()
	return (
		  <div>
		  <Nav />   
		  	<User id={id}/>
		  </div>
	  )
  };

  const UserSubmissionsScreen = () => {
	return (
		  <div>
		  <Nav />   
		  	<Items type={'ALL'} userId={idClient} voted={false}/>
		  </div>
	  )
  };

  const UserCommentsScreen = () => {
	return (
		  <div>
		  <Nav />  
		  	<Comments id={idClient} fromUser={true} voted={false}/> 
		  </div>
	  )
  };

  const VotedSubmissionsScreen = () => {
	return (
		  <div>
		  <Nav />  
		  	<Items type={'ALL'} userId={idClient} voted={true}/>
		  </div>
	  )
  };

  const VotedCommentsScreen = () => {
	return (
		  <div>
		  <Nav />  
		  	<Comments id={idClient} fromUser={true} voted={true}/> 
		  </div>
	  )
  };

export { NewsScreen, NewestScreen, AskScreen, ItemScreen, UserScreen, UserSubmissionsScreen, UserCommentsScreen, SubmitScreen, VotedSubmissionsScreen, VotedCommentsScreen };
