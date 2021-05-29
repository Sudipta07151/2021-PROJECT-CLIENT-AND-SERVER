const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const users = mongoose.model('users');
const selectBook = mongoose.model('bookSelect');

module.exports = app => {
    app.post('/api/library/select',
        async (req, res) => {
            console.log(req.user._id)
            console.log(req.body)
            const { isbn, name } = req.body;
            const select_book = new selectBook({
                _user: req.user._id,
                isbn: isbn,
                name: name,
                dateAdded: Date.now()
            })
            const data = await select_book.save();
            res.status(200).send(data.body)
            console.log(req.user.id);
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
