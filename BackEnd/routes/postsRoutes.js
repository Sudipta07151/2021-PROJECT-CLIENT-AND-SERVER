const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const manualAuthMiddleware = require('../middlewares/manualAuth');
const Profile = mongoose.model('userProfile');
const Users = mongoose.model('manualUsers');
const Post = mongoose.model('Post');
module.exports = app => {
    app.post('/api/post',
        [
            requireLogin,
            [
                check('body', 'Body is required').not().isEmpty(),
                check('header', 'Header is required').not().isEmpty(),
            ]
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const user = await Users.findById(req.user.id).select('-password');
            const newPost = {
                header: req.body.header,
                body: req.body.body,
                name: user.name,
                avatar: user.pictureURL,
                user: req.user.id
            }
        });
};

// user: {
//     type: Schema.Types.ObjectId,
//         ref: 'manualUsers',
// },
// header: {
//     type: String,
//         required: true
// },
// body: {
//     type: String,
//         required: true
// },
// name: {
//     type: String,
//         required: true
// },
// avatar: {
//     type: String
// },
// date: {
//     type: Date,
//     default: Date.now()
// },
// likes: [
//     {
//         user: {
//             type: Schema.Types.ObjectId,
//             ref: 'manualUsers'
//         }
//     }
// ],
//     comments: [{
//         user: {
//             type: Schema.Types.ObjectId,
//             ref: 'manualUsers'
//         },
//         text: {
//             type: String,
//             required: true
//         },
//         date: {
//             type: Date,
//             default: Date.now
//         }
//     }]
// })