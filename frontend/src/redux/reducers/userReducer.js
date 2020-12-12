
const initialState = {
    result: 1,
}

export default function (state = initialState, action) {
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