const express = require('express')
const groq = require('groq-sdk')
const dotenv = require('dotenv')
const ebookController = require("../controllers/ebookController");
const blogController = require("../controllers/blogController");

const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();
const router = express.Router();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


router.post('/groq', async (req, res) => {
    console.log('Mensagem recebida:', req.body.message);

    const userMessage = req.body.message;

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `${userMessage}`
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

    console.log({ response: responseContent })
    res.json({ response: responseContent });
})


router.post('/groq/ebook', ebookController.generateAndSaveEbook);
router.post('/groq/blog', blogController.generateAndSaveBlog);



router.post('/gemini', async (req, res) => {
    console.log('Mensagem recebida:', req.body.message);

    const userMessage = req.body.message;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    try {
        const result = await model.generateContent(userMessage);

        const response = await result.response;
        const responseText = response.text();
        console.log(responseText);

        res.json({ response: responseText });

    } catch (error) {
        console.error("Erro ao chamar a API do Gemini:", error);
    }

});

module.exports = router;