const express = require('express');
const Blog = require('../models/Blogs');
const User = require('../models/User');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, subTitle, complementTitle, catchyPhrase, introductoryText, developmentText, conclusion, img, writerName, createdAt, userId } = req.body;

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
            createdAt,
            deleted: false,
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
        const blogs = await Blog.find({ userId: userId, deleted: { $eq: false } });

        if (!blogs) return res.status(204).send("Nenhum blog disponível.");

        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor");
    }
})

router.get('/:userId/trash', async (req, res) => {
    const { userId } = req.params;
    try {
        const blog = await Blog.find({ userId, deleted: true });

        if (!blog) return res.status(404).send("Blog não encontrado")

        res.json(blog)
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor")
    }
})

router.patch('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findByIdAndUpdate(
            id,
            { deleted: true, deletedAt: new Date() },
            { new: true }
        );

        if (!blog) {
            return res.status(404).send("Blog não encontrado");
        }

        res.json({ message: "Blog movido para lixeira", blog });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
})

router.delete('/:id/restore', async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findByIdAndUpdate(
            id,
            { deleted: false, deletedAt: null },
            { new: true }
        );

        if (!blog) {
            return res.status(404).send("Blog não encontrado");
        }

        res.json({ message: "Blog restaurado", blog });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
})

router.get('/get/:blogId', async (req, res) => {
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

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: "Blog não encontrado" });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    res.status(500).json({ error: "Erro interno ao atualizar o blog" });
  }
});

module.exports = router;