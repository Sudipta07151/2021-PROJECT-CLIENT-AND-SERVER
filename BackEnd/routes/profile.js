const mongoose = require('mongoose');
const manualAuthMiddleware = require('../middlewares/manualAuth');
const userProfile = mongoose.model('userProfile');
const manualUsers = mongoose.model('manualUsers');
const { check, validationResult } = require('express-validator');
//get current users profile
//private route(access)
module.exports = app => {
    app.get('/api/profile/me',
        manualAuthMiddleware,
        async (req, res) => {
            try {
                //user:here is profile model(referenced user field)
                const profile = await userProfile
                    .findOne({ user: req.user.id })
                    .populate('user', ['name', 'pictureURL']);
                //getting data from refreneced 'user' table
                if (!profile) {
                    return res.status(400).json({ "message": "no profile exists" });
                }
                res.json(profile);
            }
            catch (err) {
                console.log(err.message);
                res.status(500).send('Server Error');
            }
        });
    app.post('/api/profile', [
        manualAuthMiddleware,
        [
            check('status', 'Status is required').not().isEmpty(),
            check('skills', 'Skills is required').not().isEmpty(),
        ]
    ], async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: erros.array() });
        }
    })

}

// user: {
//     type: Schema.Types.ObjectId,
//     ref: 'manualUsers'
// },
// skills: {
//     type: [String],
//     required: true
// },
// location: {

// },
// email: {
//     type: String
// },
// bio: {
//     tye: String
// }