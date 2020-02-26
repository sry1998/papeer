const jwt = require('jsonwebtoken');
const adminModel = require('../models');

exports.allUsers = async (req, res) => {
  res.send("All users");
};

exports.addAdmin = async function (req, res) {
  try {
    const ans = await Admins.create(req.body);
    res.send(ans);
  }
  catch (err) {
    res.status(500).send(err);
  } 
}

exports.login = async function (req, res) {
  try{
    console.log(req.body,"body");
    const User = await adminModel.Admins.findAll({ where: {
      email: req.body.email,
      password: req.body.password
    }    
    });
    console.log(User,"user")
    if (User) {
      const token = jwt.sign({ id: User._id, role: User.role, name: User.name }, "secret");
      let obj = {
        msg: "Success",
        token: token
      }
      console.log(obj,"obj");
      res.status(201).send(obj);
    }
    else {
        res.status(404).send("Invalid password");
    }
  }
  catch(e){
    console.log(e);
    res.status(400).send(e);
  } 
};