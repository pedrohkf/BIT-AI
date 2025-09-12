const blogGenerate = require("../services/blogGenerate")
const createBlog = require("../services/createBlog")

const generateAndSaveBlog = async (req, res) => {
    const messageUser = req.body;

    console.log("MENSAGEM USUÁRIO", messageUser);

    try {
        if (!messageUser) {
            console.log("⚠️ Tema ausente ou indefinido!");
        }

        const [
            title,
            subTitle,
            complementTitle,
            catchyPhrase,
            introductoryText,
            developmentText,
            conclusion
        ] = await Promise.all([
            blogGenerate.generateTitle(messageUser.theme),
            blogGenerate.generateSubTitle(messageUser.theme),
            blogGenerate.generateComplementTitle(messageUser.theme),
            blogGenerate.generateCatchyPhrase(messageUser.theme),
            blogGenerate.generateIntroductoryText(messageUser.theme),
            blogGenerate.generateDevelopmentText(messageUser.theme),
            blogGenerate.generateConclusion(messageUser.theme)
        ]);



        const savedBlog = await createBlog.addBlog(messageUser.userId, {
            title,
            subTitle,
            complementTitle,
            catchyPhrase,
            introductoryText,
            developmentText,
            conclusion,
        });

        console.log("ID:", messageUser.userId)

        res.status(201).json({
            message: "Blog criado com sucesso!",
            ebookId: savedBlog._id
        })

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar blog" })
    }
}

module.exports = {
    generateAndSaveBlog
}