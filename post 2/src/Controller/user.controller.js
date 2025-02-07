const userModel = require("../Models/user.model")
// const model = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// module.exports.userController = (req, res)=>{
//     res.render("")
// }

module.exports.registerController = async (req, res) => {

    try {

        const { username, img, email, password, } = req.body

        const hashed = await bcrypt.hash(password, 10)

        const user = await userModel.create({

            username,
            img,
            email,
            password: hashed
        })

        const token = jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email,
        }, process.env.JWT_URL
        )
        res.cookie("token", token)

        res.redirect("/users/login")
    } catch {
        res.status(400).json({
            message: "Errorr"
        })
    }
}

module.exports.loginController = (req, res) => {
    res.render("login")
}
module.exports.loginuserController = async (req, res) => {
    try {

        const { email, password } = req.body
        console.log(email,password)

        const user = await userModel.findOne({ email: email })
        console.log(user)
        if (!user) {
            return res.send("Invalid Credantials")
        }
        const pass = await bcrypt.compare(password, user.password)
        if (!pass) {
            return res.send("Invalid Credantials")
        }
        const token = jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email,
        }, process.env.JWT_URL
        )
        res.cookie("token", token)

        res.redirect("/feed")
    } catch {
        res.status(400).json({
            message: "Error in Login"
        })
    }
}

