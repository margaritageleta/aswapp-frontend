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