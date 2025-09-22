const mongoose = require('mongoose');
const iaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    category: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
    ],
    requiredSubscription: {
        type: String,
        enum: ['inicial', 'popular', 'premium'],
        required: true,
    }
})
module.exports = mongoose.model('IA', iaSchema)