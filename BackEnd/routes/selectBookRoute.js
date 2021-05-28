const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const selectBook = mongoose.model('bookSelect');

module.exports = app => {
    app.post('/api/library/select', requireLogin, (req, res) => {
        const { isbn, name } = req.body;
        const select_book = new selectBook({
            _user: req.user.id,
            isbn,
            name,
            dateAdded: Date.now()
        })
    });
};


// const bookSelectSchema = new Schema({
//     _user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     isbn: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     dateAdded: {
//         type: Date,
//         default: Date.now
//     }
// })
