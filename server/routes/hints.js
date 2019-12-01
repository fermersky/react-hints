const router = require('express').Router();
const { postHintValidateAsync } = require('../models/modelsValidation');
const Hint = require('../models/Hint');
const Tag = require('../models/Tag');

router.get('/', (req, res) => {
    res.end('get tips');
});

router.get('/slug/:slug', async (req, res) => {
    try {
        const hint = await Hint.findOne({ slug: req.params.slug });
        if (!hint) {
            res.status(404).end('hint not found');
        } else {
            res.json(hint);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/tag/:tag', async (req, res) => {
    try {
        const hint = await Hint.find({ tags: req.params.tag });
        if (!hint) {
            res.status(404).end('hint not found');
        } else {
            res.json(hint);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await postHintValidateAsync(req.body);

        const { tags } = req.body;

        // add tags which are not in tags table in db
        tags.forEach(async tag => {
            // check tag existens in tags table
            const result = await Tag.findOne({ title: tag });

            if (!result) {
                // add if tag doesn't exist
                await Tag.create({ title: tag });
            }
        });

        const hint = await Hint.create(req.body);
        res.status(201).json(hint._id);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
