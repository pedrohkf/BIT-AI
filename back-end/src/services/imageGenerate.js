const dotenv = require('dotenv')

dotenv.config();

const generateImage = async (theme) => {
    if (!theme || typeof theme !== "string") {
        throw new Error("Tema inválido.")
    }

    const response = await fetch(`https://api.pexels.com/v1/search?query=${theme}&per_page=18&size=large&locale=pt-BR&orientation=landscape`, {
        headers: { Authorization: process.env.API_PEXELS }
    })

    const data = await response.json();

    const photos = data.photos
        .slice(0, 10)
        .map(photo => photo.src.original)

    return photos;
}



module.exports = {
    generateImage
}