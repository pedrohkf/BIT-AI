const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const generateContent = async (theme, prompt) => {
    console.log(`Tema: ${theme} e prompt ${prompt} \n`)

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `Haja como um escritor de livros e gere um ${prompt} sobre o tema ${theme}, sem caracteres especiais, como hashtags ou algo do gênero, um texto formal e limpo.`
            }
        ],
        "model": "gemma2-9b-it",
        "temperature": 0.6,
        "max_tokens": 1024,
        "top_p": 0.95,
        "stream": false,
        "stop": null
    });

    const responseContent = chatPrompt.choices[0]?.message.content || 'Sem resposta';

    return responseContent;
}

const generateTitle = (theme) => generateContent(theme, " título");
const generateSubtitle = (theme) => generateContent(theme, "subtítulo");
const generateCopyright = (theme) => generateContent(theme, "copyright");
const generateChapterReaderAvatar = (theme) => generateContent(theme, "capítulo 'para quem este livro serve?' com no mínimo 1000 palavras");
const generateChapterStorytelling = (theme) => generateContent(theme, "capítulo de storytelling com no mínimo 1000 palavras");
const generateChapterConnection = (theme) => generateContent(theme, "capítulo de conexão com o leitor com no mínimo 1000 palavras");
const generateChapterIntroduction = (theme) => generateContent(theme, "capítulo de introdução com no mínimo 1000 palavras ");
const generateChapterProblem = (theme) => generateContent(theme, "capítulo de problemas enfrentados com no mínimo 1000 palavras");
const generateChapterSolution = (theme) => generateContent(theme, "capítulo de soluções para tais problemas dos problemas com no mínimo 1000 palavras");
const generateChapterInterest = (theme) => generateContent(theme, "capítulo para gerar ainda mais interesse sobre o asssunto ao leitor com no mínimo 1000 palavras");
const generateChapterDevelopment = (theme) => generateContent(theme, "capítulo de desenvolvimento com no mínimo 1000 palavras");
const generateChapterAttention = (theme) => generateContent(theme, "capítulo para gerar atenção ao leitor com no mínimo 1000 palavras");
const generateChapterDesire = (theme) => generateContent(theme, "capítulo que gere desejo ao leitor com no mínimo 1000 palavras");
const generateChapterAction = (theme) => generateContent(theme, "capítulo para o leitor botar em ação, em prática o que aprendeu sobre com no mínimo 100 palavras");
const generateChapterCaseStudies = (theme) => generateContent(theme, "casos de estudo com no mínimo 1000 palavras");
const generateCTA = (theme) => generateContent(theme, "agradecimento e CTA");


module.exports = {
    generateTitle,
    generateSubtitle,
    generateCopyright,
    generateChapterReaderAvatar,
    generateChapterStorytelling,
    generateChapterConnection,
    generateChapterIntroduction,
    generateChapterProblem,
    generateChapterSolution,
    generateChapterInterest,
    generateChapterDevelopment,
    generateChapterAttention,
    generateChapterDesire,
    generateChapterAction,
    generateChapterCaseStudies,
    generateCTA,
}