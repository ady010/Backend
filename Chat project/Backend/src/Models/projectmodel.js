const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, 'Project name is required'] 
    },
    code:{
        type:String,
        required:[true, 'Code is required'],
        default: ''
    }
})

const pojectModel = mongoose.model('projects', projectSchema)

module.exports = pojectModel