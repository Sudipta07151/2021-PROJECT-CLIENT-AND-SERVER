const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackUser = new Schema({
    responded: { type: Boolean, default: false },
    _commenter: { type: Schema.Types.ObjectId, ref: 'Users' }
});


module.exports = feedbackUser;