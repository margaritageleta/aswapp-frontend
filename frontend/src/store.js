import { createStore } from 'redux';

const initialState = {
    result: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state, // give all props and add them as props
                result: state.result + action.payload
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

export default store;