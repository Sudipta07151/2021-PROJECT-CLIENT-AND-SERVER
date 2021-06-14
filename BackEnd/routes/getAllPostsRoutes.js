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
        });


    app.get('/api/getblogs/:user_id',
        async (req, res) => {
            try {
                const data = await Posts.find({ _user: req.params.user_id });
                // populate('_user', ['name']);
                res.json(data);
            }
            catch (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).json({ msg: 'Post Not Found' });
                }
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })

    app.delete('/api/deleteblogs/:id',
        async (req, res) => {
            try {
                const data = await Posts.findById(req.params.id);
                // populate('_user', ['name']);
                if (!data) {
                    return res.status(404).json({ msg: 'Post Not Found' });
                }
                if (data._user.toString() !== req.user.id) {
                    return res.status(401).json({ msg: 'USER NOT AUTHORIZED', });
                }
                await data.remove();
                res.json({ msg: 'Post Removed' });
            }
            catch (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).json({ msg: 'Post Not Found' });
                }
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })

    app.get('/api/getSingleBlog/:post_id',
        async (req, res) => {
            try {
                const data = await Posts.findById(req.params.post_id);
                // populate('_user', ['name']);
                res.json(data);
            }
            catch (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).json({ msg: 'Post Not Found' });
                }
                console.error(err.message);
                res.status(500).send('SERVER ERROR');
            }
        })
}