const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
// const manualAuthMiddleware = require('../middlewares/manualAuth');
const Profile = mongoose.model('userProfile');
const Users = mongoose.model('manualUsers');
const User = mongoose.model('users');
const Post = mongoose.model('Post');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/blog',
        [
            requireLogin,
            [
                check('body', 'Body is required').isEmpty(),
                check('header', 'Header is required').isEmpty(),
            ]
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }

            try {
                console.log(req);
                const user = await User.findById(req.user._id)
                // .select('-password');
                const newPost = new Post({
                    header: req.body.postTitle,
                    body: req.body.postBody,
                    name: user.name,
                    tags: req.body.state,
                    // avatar: user.pictureURL,
                    _user: req.user._id
                })
                const post = await newPost.save();
                res.json(post);
            }
            catch (err) {
                res.status(500).send("SERVER ERROR");
            }

        });
    app.get('/api/like/:post_id',
        requireLogin,
        async (req, res) => {
            try {
                console.log(req)
                const post = await Post.findById(req.params.post_id);
                post.likes.unshift({ user: req.user.id });
                await post.save();
                res.json(post.likes);
            }
            catch (err) {
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })
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