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

export const FETCH_HINT = 'hints/FETCH_HINT';
export const fetchHint = hintSlug => {
    return async dispatch => {
        dispatch(requestHint());

        const hint = await fetch('http://localhost:3000/api/hints/' + hintSlug);
        const hintJson = await hint.json();
        dispatch(recieveHint(hintJson));
    };
};
