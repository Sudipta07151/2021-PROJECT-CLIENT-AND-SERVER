const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Posts = mongoose.model('posts');
module.exports = app => {
    app.post('/api/posts', requireLogin, (req, res) => {
        const { title, body, tags } = req.body;
        const posts = new Posts({
            title: title,
            body: body,
            tags: tags,
            _user: req.user.id
        })
    });
};

// title: {
//     type: String,
//     required: true
// },
// body: {
//     type: String,
//     required: true
// },
// date: {
//     type: Date,
//     default: Date
// },
// tags: {
//     education: { type: Boolean, default: false },
//     art: { type: Boolean, default: false },
//     techninal: { type: Boolean, default: false },
//     other: { type: Boolean, default: false }
// },
// likes: { type: Number, default: 0 },
// dislikes: { type: Number, default: 0 },
// feedbackUser: [feedbackUserSchema],
// _author: { type: Schema.Types.ObjectId, ref: 'Users' }