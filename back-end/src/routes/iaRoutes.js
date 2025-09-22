const express = require('express');
const IA = require('../models/IA');
const Category = require("../models/Category");
const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, description, prompt, categories, requiredSubscription } = req.body;
    try {
        const categoriesFound = await Category.find({ name: { $in: categories } });
        if (categoriesFound.length !== categories.length) {
            return res.status(400).json({ error: "Uma ou mais categorias não encontradas" });
        }
        const newIa = new IA({
            name,
            description,
            prompt,
            category: categoriesFound.map(category => category._id),
            requiredSubscription
        });
        await newIa.save();
        res.status(200).json(newIa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const ias = await IA.find();
        res.status(200).json(ias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ia = await IA.findById(id);
        if (!ia) return res.status(404).send("IA não encontrada");
        res.json(ia);
    } catch (e) {
        console.error(e);
        res.status(500).send("Erro no servidor")
    }
});
module.exports = router;