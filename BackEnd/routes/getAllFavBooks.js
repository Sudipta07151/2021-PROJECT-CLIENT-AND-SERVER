const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const selectBook = mongoose.model('bookSelect');

module.exports = app => {
    app.get('/api/library/getbooks/:user_id',
        async (req, res) => {
            try {
                const mybooks = await selectBook.find({ _user: req.params.user_id });
                if (!mybooks)
                    return res.status(400).json({ msg: 'no books' });
                res.json(mybooks);
            } catch (err) {
                console.log(err);
            }
        });
};
