const mongoose = require('mongoose');
const User = mongoose.model('users');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        // ref: 'manualUsers',
        ref: 'users'
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
    // avatar: {
    //     type: String
    // },
    tags: {
        art: { type: Boolean, default: false },
        education: { type: Boolean, default: false },
        technical: { type: Boolean, default: false },
        other: { type: Boolean, default: false }
    },
    date: {
        type: Date,
        default: Date.now()
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                // ref: 'manualUsers',
                ref: 'users'
            }
        }
    ],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            // ref: 'manualUsers',
            ref: 'users'

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