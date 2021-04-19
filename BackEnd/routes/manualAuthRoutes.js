const mongoose = require('mongoose');
//const requireLogin = require('../middlewares/requireLogin');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/dev');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const manualUsers = mongoose.model('manualUsers');

module.exports = app => {
    app.post('/api/manualAuth',
        [
            check('email', 'Valid email is required').isEmail(),
            check('password', 'Please enter 6+ digit character password').isLength({ min: 6 }),
            check('name', 'Name is required').not().isEmpty()
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }
            const { email, password, name } = req.body;
            try {
                //see if user exists
                let user = await manualUsers.findOne({ email });
                if (user) {
                    res.status(400).json({ errors: [{ message: 'USER ALREADY EXISTS' }] })
                }
                //get user gravatar
                const avatar = gravatar.url(email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                })
                user = new manualUsersAuth({
                    email: email,
                    password: password,
                    name: name,
                    pictureURL: avatar
                })
                //encrypt passowrd
                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds);
                user.password = await bcrypt.hash(password, salt);
                await user.save();
                // res.send('USER REGISTERED');
                //return jsonwebtoken
                const payload = {
                    user: {
                        id: user.id
                    }
                }
                jwt.sign(
                    payload,
                    jwtKey,
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    }
                );
            }
            catch (err) {
                console.log(err.message);
                res.status(500).send('SERVER ERROR');//SERVER ERROR
            }

            // const { email, password, name } = req.body;
            // 
            console.log(req.body);
        })
};


