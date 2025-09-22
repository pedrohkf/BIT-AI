const ebookGenerate = require("../services/ebookGenerate")
const createEbook = require("../services/createEbook")

const generateAndSaveEbook = async (req, res) => {
    const messageUser = req.body;

    try {
        const [
            title,
            subtitle,
            copyright,
            chapterReaderAvatar,
            chapterStorytelling,
            chapterConnection,
            chapterIntroduction,
            chapterProblem,
            chapterSolution,
            chapterInterest,
            chapterDevelopment,
            chapterAttention,
            chapterDesire,
            chapterAction,
            chapterCaseStudies,
            chapterCTA
        ] = await Promise.all([
            ebookGenerate.generateTitle(messageUser.theme),
            ebookGenerate.generateSubtitle(messageUser.theme),
            ebookGenerate.generateCopyright(messageUser.theme),
            ebookGenerate.generateChapterReaderAvatar(messageUser.theme),
            ebookGenerate.generateChapterStorytelling(messageUser.theme),
            ebookGenerate.generateChapterConnection(messageUser.theme),
            ebookGenerate.generateChapterIntroduction(messageUser.theme),
            ebookGenerate.generateChapterProblem(messageUser.theme),
            ebookGenerate.generateChapterSolution(messageUser.theme),
            ebookGenerate.generateChapterInterest(messageUser.theme),
            ebookGenerate.generateChapterDevelopment(messageUser.theme),
            ebookGenerate.generateChapterAttention(messageUser.theme),
            ebookGenerate.generateChapterDesire(messageUser.theme),
            ebookGenerate.generateChapterAction(messageUser.theme),
            ebookGenerate.generateChapterCaseStudies(messageUser.theme),
            ebookGenerate.generateCTA(messageUser.theme)
        ]);


        const savedEbook = await createEbook.addEbook(messageUser.userId, {
            title, subtitle, copyright, chapterReaderAvatar, chapterStorytelling, chapterConnection, chapterIntroduction, chapterProblem, chapterSolution, chapterInterest, chapterDevelopment, chapterAttention, chapterDesire, chapterAction, chapterCaseStudies, chapterCTA
        });

        console.log(messageUser.userId)

        res.status(201).json({
            message: "Ebook criado com sucesso!",
            ebookId: savedEbook._id
        })

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar ebook" })
    }
}

module.exports = {
    generateAndSaveEbook
}