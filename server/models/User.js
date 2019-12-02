const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        max: 30,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img_path: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
