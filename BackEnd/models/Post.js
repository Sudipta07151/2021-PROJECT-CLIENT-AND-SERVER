const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'manualUsers',
    },
    header: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'manualUsers'
            }
        }
    ],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'manualUsers'
        },
        text: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
})

mongoose.model('Post', PostSchema);