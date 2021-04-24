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
    location: {

    },
    email: {
        type: String
    },
    bio: {
        tye: String
    }
});

mongoose.model('userProfile', profileSchema);