import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import items from './reducers/itemReducer';
import user from './reducers/userReducer';

const initialState = {};

// createStore (reducer, initialAppState, middleware)
const store = createStore (
    combineReducers({
        items,
        user,
    }), 
    {},
    applyMiddleware(thunk)
);

export default store;

/*
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
*/