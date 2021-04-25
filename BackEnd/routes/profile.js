const mongoose = require('mongoose');
const manualAuthMiddleware = require('../middlewares/manualAuth');
const userProfile = mongoose.model('userProfile');
const manualUsers = mongoose.model('manualUsers');
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
}