const userModel = require("../Models/users.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

module.exports.registerController = async (req, res) => {
    try {
        const { username, email, password, posts } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields....",
            });
        }
        const isUserExists = await userModel.findOne({
            $or: [{ username },{email}],

        })
        if (isUserExists) {
            return res.status(400).json({
                message: "User already Exists",
            });
        }

        const hash = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email,
            password: hash,
            posts
        });

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            config.KEY
        );
        res.status(201).json({message: user, token});
    } catch {
        res.status(400).json({ message: "catch block" });
    }
};

module.exports.loginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ message: "Invalid Credantials" });
    }
    const ismatched = await bcrypt.compare(password, user.password);
    if (!ismatched) {
        return res.status(400).json({ message: "Invalid Credantials" });
    }

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        config.KEY
    );
    res.status(200).json({ message: "Login Succsss", token });
};

module.exports.profileController = async (req, res) => {

    try { 

        const user = await userModel.findById(req.user.id).populate('posts');
        // console.log(user)

        // console.log(user);
        res.status(200).json({
            user
        })
    } catch {
        res.status(401).json({
            message: "Unsuccess"
        })
    }
};
