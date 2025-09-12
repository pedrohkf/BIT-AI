const express = require('express');
const Ebook = require('../models/Ebook');
const User = require('../models/User');
const { default: mongoose, Types } = require('mongoose');

const router = express.Router();

router.post('/add', async (req, res) => {
    const {
        cape,
        title,
        authorName,
        brandApresentation,
        baseTheme,
        introductionTheme,
        fundamentalTheme,
        principlesTheme,
        conclusionTheme,
        links = [],
        contact,
        createadAt,
        userId
    } = req.body;

    try {
        const userID = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        const newEbook = new Ebook({
            cape,
            title,
            authorName,
            brandApresentation,
            baseTheme,
            introductionTheme,
            fundamentalTheme,
            principlesTheme,
            conclusionTheme,
            links,
            contact,
            createadAt: createadAt || new Date(),
            userId: userID
        });

        await newEbook.save();
        res.status(201).json(newEbook);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar eBook', details: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    try {
        const ebooks = await Ebook.find({ userId: mongoose.Types.ObjectId(userId) });

        res.status(200).json(ebooks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eBooks', details: error.message });
    }
});

router.get('/bit-ai/:ebookId', async (req, res) => {
    const { ebookId } = req.params;

    try {
        const ebook = await Ebook.findById(ebookId);

        if (!ebook) {
            return res.status(404).json({ error: 'eBook não encontrado.' });
        }

        res.json(ebook);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eBook', details: error.message });
    }
});

module.exports = router;
