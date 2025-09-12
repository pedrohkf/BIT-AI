const express = require('express');
const Blog = require('../models/Blogs');
const User = require('../models/User');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, subTitle, complementTitle, catchyPhrase, introductoryText, developmentText, conclusion, img, writerName, createadAt, userId } = req.body;

    try {
        const user = await User.findById({ _id: userId });

        if (!user) {
            return res.status(400).json({ error: "Usuario não encontrado" })
        }

        const newBlog = new Blog({
            title,
            subTitle,
            complementTitle,
            catchyPhrase,
            introductoryText,
            developmentText,
            conclusion,
            img,
            writerName,
            createadAt,
            user: userId
        });

        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const blog = await Blog.find({ userId });

        if (!blog) return res.status(404).send("Blog não encontrado")

        res.json(blog)
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor")
    }
})

router.get('/bit-ai/:blogId', async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);

        if (!blog) return res.status(404).send("Blog não encontrado")

        res.json(blog)
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor")
    }
})

module.exports = router;