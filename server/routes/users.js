const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {
    registerUserValidateAsync,
    loginUserValidateAsync
} = require('../models/modelsValidation');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const user = await registerUserValidateAsync(req.body);

        // check if email already exists
        const emailExists = await User.findOne({ email: user.email });

        if (emailExists) {
            return res
                .status(404)
                .json({ message: 'email is already been taken' });
        }

        // crypt password
        const encryptedPass = await bcryptjs.hash(
            user.password,
            await bcryptjs.genSalt(10)
        );

        // add user to db
        const addedUser = await User.create({
            name: '@' + user.name,
            email: user.email,
            password: encryptedPass,
            img_path: user.img_path
        });

        res.status(201).json({ _id: addedUser._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        await loginUserValidateAsync(req.body);

        // check user exists or not
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res
                .status(404)
                .json({ message: `Email or password is wrong` });
        }

        // compare passwords
        const validPass = await bcryptjs.compare(
            req.body.password,
            user.password
        );

        if (!validPass) {
            return res.status(404).json({ message: `Invalid password` });
        }

        // get token
        const token = jwt.sign({ _id: user._id }, process.env.USER_SECRET);
        res.header('Authorization', 'Bearer ' + token).json({
            token,
            user_id: user._id,
            name: user.name
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/name/:userName', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.params.userName });

        if (!user) {
            res.status(404).send('user was not found');
        }

        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (!user) {
            res.status(404).send('user was not found');
        }

        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/img/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        if (!user) {
            res.status(404).send('user was not found');
        }

        if (user.img_path) {
            const readStream = fs.createReadStream(
                '../server/resources/avatars/' + user.img_path
            );
            readStream.pipe(res);
            res.status(200);
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
