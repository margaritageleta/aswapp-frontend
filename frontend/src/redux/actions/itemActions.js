import axiosClient from '../../config/axios';

// main get items function
export function getItems() {
    return async dispatch => {
        dispatch({
            type: 'GET_ITEMS',
        });

        try {
            const response = await axiosClient.get(`/items`);
            dispatch({
                type: 'GET_ITEMS_SUCCESS',
                payload: response.data,
            });
            return true;
        }
        catch (err) {
            dispatch({
                type: 'GET_ITEMS_FAIL',
            });
            return false;
        }
    };
};

export function getAsks() {
    return async dispatch => {
        dispatch({
            type: 'GET_ASKS',
        });

        try {
            const response = await axiosClient.get(`/items/asks`);
            dispatch({
                type: 'GET_ASKS_SUCCESS',
                payload: response.data,
            });
            return true;
        }
        catch (err) {
            dispatch({
                type: 'GET_ASKS_FAIL',
            });
            return false;
        }
    };
};

export function getUrls() {
    return async dispatch => {
        dispatch({
            type: 'GET_URLS',
        });

        try {
            const response = await axiosClient.get(`/items/urls`);
            dispatch({
                type: 'GET_URLS_SUCCESS',
                payload: response.data,
            });
            return true;
        }
        catch (err) {
            dispatch({
                type: 'GET_URLS_FAIL',
            });
            return false;
        }
    };
};