const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSelectSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    isbn: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
    }
})

mongoose.model('bookSelect', bookSelectSchema);