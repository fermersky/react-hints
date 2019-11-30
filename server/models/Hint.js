const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const TagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: 'title',
        unique: true
    }
});

const HintSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [TagSchema]
    },
    user_id: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: 'title',
        unique: true
    }
});

module.exports = mongoose.model('Hint', HintSchema);
