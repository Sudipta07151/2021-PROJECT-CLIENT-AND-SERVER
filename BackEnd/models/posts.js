const mongoose = require('mongoose');
const feedbackUserSchema = require('./feedbackUser');

const { Schema } = mongoose;

const postsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date
    },
    tags: {
        education: { type: Boolean, default: false },
        art: { type: Boolean, default: false },
        techninal: { type: Boolean, default: false },
        other: { type: Boolean, default: false }
    },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    feedbackUser: [feedbackUserSchema],
    _author: { type: Schema.Types.ObjectId, ref: 'Users' }
})


module.exports = mongoose.model('posts', postsSchema);
