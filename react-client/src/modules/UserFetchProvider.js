export default class UserFetchProvider {
    static async fetchUser(userId = '', callback) {
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

    static async fetchUserImage(userId = '', callback) {
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
