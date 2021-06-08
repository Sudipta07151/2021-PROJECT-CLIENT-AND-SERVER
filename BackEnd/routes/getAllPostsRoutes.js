const mongoose = require('mongoose');
const Posts = mongoose.model('Post');


module.exports = (app) => {
    app.get('/api/getblogs',
        async (req, res) => {
            try {
                const data = await Posts.find();
                // populate('_user', ['name']);;
                res.status(200).json(data);
            }
            catch (err) {
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })
}