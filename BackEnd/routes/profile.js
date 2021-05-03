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
            check('email', 'Valid email is required').isEmail(),
        ]
    ], async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        const {
            skills,
            location,
            email,
            bio,
            status
        } = req.body;
        //profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        if (location)
            profileFields.location = location;
        if (email)
            profileFields.email = email;
        if (bio)
            profileFields.bio = bio;
        if (status)
            profileFields.status = status;
        if (skills)
            profileFields.skills = skills.split(',').map(skill => skill.trim());

        try {
            let profile = await userProfile.findOne({ user: req.user.id }).populate('user', ['name', 'pictureURL']);;
            if (profile) {
                profile = await userProfile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                )
                return res.json(profile);
            }
            profile = new userProfile(profileFields);
            await profile.save();
            return res.json(profile);
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
        // console.log(profileFields.skills);
        // res.status(200).json(profileFields);
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