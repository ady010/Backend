const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

module.exports.registercontroller = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: "username is required" });
    }

    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }

    const isUserExits = await userModel.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (isUserExits) {
      return res.status(400).json({ message: "Already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      passwaord: hashed,
    });
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      config.JWT_SECRET
    );
    res.status(200).json({ message: token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.logincontroller = async (req, res)=>{

    const {email, password} = req.body

    const user = await userModel.findOne({
        email
      });
      if(!user){
        res.status(400).json({message:"Invalid Credantials"})
      }
      const isMatch = await bcrypt.compare(password, user.passwaord)
      if(!isMatch){
        res.status(400).json({message:"Invalis Credantials"})
      }


      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        config.JWT_SECRET
      );

      res.status(200).json({message: token, user})
}

module.exports.profilecontroller = (req, res)=>{
    res.send(req.user)
}