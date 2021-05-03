const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'manualUsers'
    },
    skills: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        tye: String
    }
});

mongoose.model('userProfile', profileSchema);