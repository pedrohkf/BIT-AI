const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
    cape: { type: String, required: false },
    title: { type: String, required: true },
    authorName: { type: String, required: false },
    subtitle: { type: String, required: true },
    copyright: { type: String, required: true },
    chapterReaderAvatar: { type: String, required: true },
    chapterStorytelling: { type: String, required: true },
    chapterConnection: { type: String, required: true },
    chapterIntroduction: { type: String, required: true },
    chapterProblem: { type: String, required: true },
    chapterSolution: { type: String, required: true },
    chapterInterest: { type: String, required: true },
    chapterDevelopment: { type: String, required: true },
    chapterAttention: { type: String, required: true },
    chapterDesire: { type: String, required: true },
    chapterAction: { type: String, required: true },
    chapterCaseStudies: { type: String, required: true },
    chapterCTA: { type: String, required: true },
    links: { type: [String], default: [] },
    contact: { type: String, required: false },
    createdAt: { type: Date, default: Date.now() },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Ebook', EbookSchema);
