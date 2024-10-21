const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Forum', forumSchema);
