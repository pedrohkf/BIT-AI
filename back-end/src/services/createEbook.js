const Ebook = require("../models/Ebook");

const addEbook = async (userId, { title, subtitle, copyright, chapterReaderAvatar, chapterStorytelling, chapterConnection, chapterIntroduction, chapterProblem, chapterSolution, chapterInterest, chapterDevelopment, chapterAttention, chapterDesire, chapterAction, chapterCaseStudies, chapterCTA


}) => {
    const ebook = new Ebook({
        title, subtitle, copyright, chapterReaderAvatar, chapterStorytelling, chapterConnection, chapterIntroduction, chapterProblem, chapterSolution, chapterInterest, chapterDevelopment, chapterAttention, chapterDesire, chapterAction, chapterCaseStudies, chapterCTA, userId
    })

    const savedEbook = await ebook.save();
    console.log("Ebook salvo no banco!")
    return savedEbook;
}

module.exports = {
    addEbook
}