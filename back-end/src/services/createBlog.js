const Blog = require("../models/Blogs");

const addBlog = async (userId, { title,
    subTitle, complementTitle, catchyPhrase, introductoryText, developmentText, conclusion,
}) => {
    const blog = new Blog({
        title, subTitle, complementTitle, catchyPhrase, introductoryText, developmentText, conclusion, userId
    })

    const savedBlog = await blog.save();
    console.log("Blog salvo no banco!")
    return savedBlog;
}

module.exports = {
    addBlog
}