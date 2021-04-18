const manualAuthMiddleware = require('../middlewares/manualAuth');
const mongoose = require('mongoose');
const manualUsers = mongoose.model('manualUsers');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/dev');
const bcrypt = require('bcrypt');


module.exports = (app) => {
    app.get('/',
        manualAuthMiddleware,
        async (req, res) => {
            try {
                const user = await manualUsers.findById(req.user.id).select('-password');
                res.status(200).json(user);
            }
            catch (err) {
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })


    app.post('/api/mauth',
        [
            check('email', 'Valid email is required').isEmail(),
            check('password', 'password must be entered').exists(),
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }
            const { email, password } = req.body;
            try {
                //see if user exists
                let user = await manualUsers.findOne({ email });
                if (!user) {
                    res.status(400).json({ errors: [{ message: 'Invalid Credentials' }] });
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    res.status(400).json({ errors: [{ message: 'Invalid Credentials' }] });
                }
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
}






