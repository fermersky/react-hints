export const RECIEVE_USER_IMAGE = 'users/RECIEVE_USER_IMAGE';
export const recieveUserImage = url => {
    return {
        type: RECIEVE_USER_IMAGE,
        payload: url
    };
};

export const FETCH_USER_IMAGE = 'users/FETCH_USER_IMAGE';
export const fetchUserImage = userId => {
    return async dispatch => {
        if (userId) {
            fetch('http://localhost:3000/api/users/img/' + userId)
                .then(response => response.blob())
                .then(function(myBlob) {
                    var objectURL = URL.createObjectURL(myBlob);
                    dispatch(recieveUserImage(objectURL));
                });
        }
    };
};

export const RECIEVE_USER = 'users/RECIEVE_USER';
export const recieveUser = json => {
    return {
        type: RECIEVE_USER,
        payload: json
    };
};

export const FETCH_USER = 'users/FETCH_USER_IMAGE';
export const fetchUser = userId => {
    return async dispatch => {
        if (userId) {
            const response = await fetch(
                'http://localhost:3000/api/users/' + userId
            );
            const json = await response.json();

            dispatch(recieveUser(json));
        }
    };
};
