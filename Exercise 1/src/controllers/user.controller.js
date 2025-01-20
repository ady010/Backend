const User = require("../model/user.model")
const indexController = function(req,res){
    res.send('hello world');
}

const createUserForm = (req, res) => {
    res.render("create")
  };
  
  module.exports = {indexController ,createUserForm}