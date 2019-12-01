const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        max: 30,
        unique: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    img_path: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);
