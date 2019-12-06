export const RECIEVE_TOKEN = 'auth/RECIEVE_TOKEN';
export const recieveToken = token => {
    return {
        type: RECIEVE_TOKEN,
        payload: token
    };
};

export const SET_ERROR_TEXT = 'auth/SET_ERROR_TEXT';
export const setErrorText = err => {
    return {
        type: SET_ERROR_TEXT,
        payload: err
    };
};

export const RESET_USER = 'auth/RESET_USER';
export const resetUser = () => {
    return {
        type: RESET_USER
    };
};

export function userLogout() {
    return function(dispatch) {
        sessionStorage.clear();
    };
}

export function requestLogin(email, password) {
    return async function(dispatch) {
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const responseBody = await response.json();

        if (response.ok) {
            dispatch(recieveToken(responseBody));
            sessionStorage.setItem('token', responseBody.token);
            sessionStorage.setItem('user_id', responseBody.user_id);
            sessionStorage.setItem('user_name', responseBody.name);
        } else {
            dispatch(setErrorText(responseBody.message));
        }
    };
}
