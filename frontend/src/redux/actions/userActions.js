export function changeDescription(text) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'CHANGE_DESC',
                payload: text,
            })
        }, 2000);
    }
}