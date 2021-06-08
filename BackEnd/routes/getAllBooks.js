const mongoose = require('mongoose');
const allBooks = mongoose.model('bookSelect');


module.exports = (app) => {
    app.get('/api/library/getAll',
        async (req, res) => {
            try {
                const data = await allBooks.find().
                    populate('_user', ['name'])
                res.status(200).json(data);
            }
            catch (err) {
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })
}