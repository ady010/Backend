const userModel = require("../Models/user.model")
const userController = (req, res)=>{
    res.send("Hello from user")
}

const createUser = async (req, res) =>{
    const {username, email, age} = req.query

    const userCreated = new userModel({
        username,
        email,
        age
    }) 
    await userCreated.save()
    res.send("User Created")
}
const readUser = async (req, res) => {
    const user = await userModel.findOne({ username: "Ady" });
    res.send("User Found");
};

const updateUser = async (req, res) =>{
    const updatedUser = await userModel.findOneAndUpdate(
        {username: "Ady"}, 
        {age: 30},
        {new: true})
    res.send("User Updated")
}

const deleteUser = async (req, res) =>{
    await userModel.findOneAndDelete({
        username: "Ady"
    })
    res.send("User Deleted")
}


module.exports = {userController, createUser, readUser, updateUser, deleteUser}

