const _config = {
    PORT: process.env.PORT || 3000,
    MONGODB : process.env.DB_URL || "mongodb://0.0.0.0/insta",
    JWT_SECRET :"SDSDSKknak"
}

const config = Object.freeze(_config)


module.exports = config