import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Items from './Items';
import Item from './Item';
import Comments from './Comments';
import User from './User';
import Nav from '../stateless/Nav';

const News = () => {
	return (
		<div>
        <Nav/>
				<Items type={'ALL'} userId={''} voted={false} />
		</div>
	)
};

const Newest = () => {
	return (
		<div>
        <Nav/>
				<Items type={'URL'} userId={''} voted={false} />
		</div>
	)
};

const Ask = () => {
	return (
		<div>
        <Nav/>
				<Items type={'ASK'} userId={''} voted={false} />
		</div>
	)
};

export { News, Newest, Ask };
