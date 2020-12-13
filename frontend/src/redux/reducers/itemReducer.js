
const initialState = {
    items: [],
    loading: false,
    error: false,
}

export default function (state = initialState, action) {
    console.log(action.type);
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
        case 'GET_ASKS':
            return {
                ...state, // give all props and add them as props
                loading: true,
                error: false,
            };
        case 'GET_ASKS_SUCCESS':
            return {
                ...state, // give all props and add them as props
                items: action.payload,
                loading: false,
                error: false,
            };
        case 'GET_ASKS_FAIL':
            return {
                ...state, // give all props and add them as props
                items: [],
                loading: false,
                error: true,
            };
        case 'GET_URLS':
            return {
                ...state, // give all props and add them as props
                loading: true,
                error: false,
            };
        case 'GET_URLS_SUCCESS':
            return {
                ...state, // give all props and add them as props
                items: action.payload,
                loading: false,
                error: false,
            };
        case 'GET_URLS_FAIL':
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