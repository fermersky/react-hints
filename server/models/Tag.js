const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tag', TagSchema);
