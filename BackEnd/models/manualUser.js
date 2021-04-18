const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const manualUsersSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        pictureURL: {
            type: String,
            default: ''
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
)

mongoose.model('manualUsers', manualUsersSchema);