const product = require('../models/posts');

exports.postAddposts = (req, res, next) => {
    const title = req.body.title,
    const body = req.body.body,
    const date = Date,
    const tag = req.body.tag,
    const posts = new Posts({
        title: title,
        body: body,
        data: date,
        tag: tag
    });
    posts.save().then(result => {
        console.log('POST CREATED');
        res.redirect('/user/products');
    })
}
