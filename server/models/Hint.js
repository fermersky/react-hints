const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const HintSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    author: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: 'title'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Hint', HintSchema);
