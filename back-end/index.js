const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const users = require('./src/routes/usersRoutes');
const authRoutes = require('./src/routes/authRoutes');
const iaRoutes = require('./src/routes/iaRoutes');
const categorieRoutes = require("./src/routes/categoriesRoutes");
const blogsRoutes = require("./src/routes/blogRoutes");
const ebooksRoutes = require("./src/routes/ebookRoutes");
const iaBlogRoutes = require("./src/routes/iaMessageRoutes");

require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.json());
app.use('/users', users);
app.use('/auth', authRoutes);
app.use('/ias', iaRoutes);
app.use('/category', categorieRoutes);
app.use('/blogs', blogsRoutes);
app.use('/ebooks', ebooksRoutes);
app.use('/ia', iaBlogRoutes); // acabei de mudar

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const port = process.env.PORT || 2700;

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conexão com MongoDB"))
    .catch((error) => console.log("Erro na conexão com MongoDB:", error.message));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;