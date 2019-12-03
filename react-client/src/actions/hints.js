export const REQUEST_HINT = 'hints/REQUEST_HINT';
export const requestHint = () => {
    return {
        type: REQUEST_HINT
    };
};

export const RECIEVE_HINT = 'hints/RECIEVE_HINT';
export const recieveHint = hint => {
    return {
        type: RECIEVE_HINT,
        payload: hint
    };
};

export const RECIEVE_HINTS = 'hints/RECIEVE_HINTS';
export const recieveHints = hints => {
    return {
        type: RECIEVE_HINTS,
        payload: hints
    };
};

export const FETCH_HINT = 'hints/FETCH_HINT';
export const fetchHint = (filter = '', value = '') => {
    return async dispatch => {
        dispatch(requestHint());

        const hint = await fetch(
            `http://localhost:3000/api/hints/${filter}/${value}`
        );
        const hintJson = await hint.json();
        if (filter === 'slug') {
            dispatch(recieveHint(hintJson));
        } else {
            dispatch(recieveHints(hintJson));
        }
    };
};
