const _config = {
    PORT : process.env.PORT || 3000,
    DB : process.env.DB_URL,
    KEY : process.env.KEY
}

const config = Object.freeze(_config)

module.exports = config