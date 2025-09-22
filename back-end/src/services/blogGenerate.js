const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const generateContent = async (theme, prompt) => {
    console.log(`TEMA: ${theme} e PROMPT ${prompt} \n`)

    if (!theme || typeof theme !== "string") {
        throw new Error("Tema inválido.")
    }

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `Com base no ${theme} , gere um ${prompt} com conteúdo claro, formal e objetivo, seguindo as normas da ABNT. O texto não deve conter formatação em Markdown (como #, *, listas ou negritos) e deve manter uma estrutura coesa, com parágrafos apenas onde fizer sentido.`
            }
        ],
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "temperature": 0.6,
        "max_tokens": 1024,
        "top_p": 0.95,
        "stream": false,
        "stop": null
    });

    const responseContent = chatPrompt.choices[0]?.message.content || 'Sem resposta';

    return responseContent;
}


const generateTitle = (theme) => generateContent(theme, "um título no máximo de 4 palavras");
const generateSubTitle = async (theme) => {
    const title = await generateTitle(theme);
    return generateContent(theme, `subtítulo para o título "${title}"`);
}
const generateComplementTitle = (theme) => generateContent(theme, "título complementar ao invés do principal");
const generateCatchyPhrase = (theme) => generateContent(theme, "uma frase de efeito com no máximo 5 palavras ");
const generateIntroductoryText = (theme) => generateContent(theme, "um texto introdutorio de no mínimo 500 palavras ");
const generateDevelopmentText = (theme) => generateContent(theme, "um texto de desenvolvimento de no mínimo 500 palavras ");
const generateConclusion = (theme) => generateContent(theme, "um texto de conclusão de no mínimo 500 palavras ");


module.exports = {
    generateTitle,
    generateSubTitle,
    generateComplementTitle,
    generateCatchyPhrase,
    generateIntroductoryText,
    generateDevelopmentText,
    generateConclusion,
}