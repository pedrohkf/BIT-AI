const express = require('express');
const Categories = require('../models/Category');
const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, icon } = req.body;
    try {
        const newCategory = new Categories({ name, icon });
        await newCategory.save();
        res.status(200).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
module.exports = router;