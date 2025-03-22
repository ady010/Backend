const _config = {
    PORT : process.env.PORT,
    MONGO : process.env.MONGODB || 'mongodb://0.0.0.0/messaging',
    KEY : process.env.JWTKEY
}
const config = Object.freeze(_config)

module.exports = config
