const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    complementTitle: {
        type: String,
        required: true
    },
    catchyPhrase: {
        type: String,
        required: true
    },
    introductoryText: {
        type: String,
        required: true
    },
    developmentText: {
        type: String,
        required: true
    },
    conclusion: {
        type: String,
        required: true
    },
    img: {
        type: [String],
        default: "https://images.pexels.com/photos/1055068/pexels-photo-1055068.jpeg",
        required: true
    },
    writerName: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    deleted: {
        type: Boolean,
        default: false,
        required: true,
    },
    deletedAt: {
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})
module.exports = mongoose.model('Blog', blogSchema)