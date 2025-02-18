const userModel = require("../Models/users.models")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')

module.exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }
        const isUserExists = await userModel.findOne({
            $or: [{ user }],

            if(isUserExists) {
                return res.status(400).json({
                    message: "User already Exists"
                })
            }
        })
        const hash = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            username,
            email,
            password: hash
        })

        const token = jwt.sign({
            id: user._id,
        }, "secret"
        )
        res.status(201).json(token, user)
    }
    catch {
        res.status(400).json({ message: "Error" })
    }
}

module.exports.loginController = (req, res) => {
    const { email, password } = req.body

    const user = userModel.findOne({})
}