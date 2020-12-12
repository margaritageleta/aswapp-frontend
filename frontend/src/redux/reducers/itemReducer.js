
const initialState = {
    items: [],
    loading: false,
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state, // give all props and add them as props
                loading: true,
                error: false,
            };
        case 'GET_ITEMS_SUCCESS':
            return {
                ...state, // give all props and add them as props
                items: action.payload,
                loading: false,
                error: false,
            };
        case 'GET_ITEMS_FAIL':
            return {
                ...state, // give all props and add them as props
                items: [],
                loading: false,
                error: true,
            };
        default:
            return state; // New State of App
    }
};