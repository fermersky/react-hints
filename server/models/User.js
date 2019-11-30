const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        max: 30
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);
