const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    source: {
        type: String,
        enum: ["blog", "ebook"],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})
module.exports = mongoose.model('Lead', leadSchema)