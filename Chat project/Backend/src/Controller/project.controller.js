const projModel = require("../Models/projectmodel")

module.exports.create = async (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ message: "Name is required" })
    }

    const project = await projModel.create({
        name,
        code: " "
    })

    res.status(200).json({ message: "Project created succussfully", data: project })
}


module.exports.list = (req, res) => {
    const projects = projModel.find()

    res.status(200).json({
        projects
    })
}