const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        required: true
    },
    tags: [{ type: String }],
    _author: { type: Schema.Types.ObjectId, ref: 'author' }
})


module.exports = mongoose.model('Posts', postsSchema);