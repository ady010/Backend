const userModel = require("../Models/user.model")
const model = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.regController = (req, res) => {
    res.render("register")
}

module.exports.reguserController = async (req, res) => {

    try {

        const { username, email, password } = req.body

        const hashed = await bcrypt.hash(password, 10)

        const user = await userModel.create({

            username,
            email,
            password: hashed

        })

        const token = jwt.sign(
            {
                id: user._id,
                user: username
            }, process.env.JWT_URL
        )
        res.cookie("token", token)
        
        res.redirect("/feed")

        console.log(token);
    } catch {
        res.status(401).json({
            message: "Errorrrr"
        })
    }
}
