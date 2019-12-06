export default class UserFetchProvider {
    static async fetchUserByName(userName = '', callback) {
        try {
            if (userName) {
                const response = await fetch(
                    'http://localhost:3000/api/users/name/' + userName
                );
                const json = await response.json();
                callback(json);
            }
        } catch (err) {
            console.log(err);
        }
    }

    static async fetchUserById(userId = '', callback) {
        try {
            if (userId) {
                const response = await fetch(
                    'http://localhost:3000/api/users/' + userId
                );
                const json = await response.json();
                callback(json);
            }
        } catch (err) {
            console.log(err);
        }
    }

    static async fetchUserImageById(userId = '', callback) {
        try {
            if (userId) {
                const response = await fetch(
                    'http://localhost:3000/api/users/img/' + userId
                );
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);

                callback(url);
            }
        } catch (err) {
            console.log(err);
        }
    }
}
