const _config = {
    PORT : process.env.PORT,
    DB : process.env.DB_URL
}

const config = Object.freeze(_config)

module.exports = config