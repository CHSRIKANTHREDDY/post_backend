const mongoose = require("mongoose");
var User = mongoose.model("Users");

const logIn = async (req, res) => {
  try {
    const reqBody = req.body;
  
    let user = await User.findOne({
      email: reqBody.email,
      passwrod: reqBody.passwrod
    });
    if (user) {
      res.send({
        success: true,
        data: user,
      });
      } else {
        throw new Error("please enter correct the password");
      }
  } catch (error) {
    res.status(error.statusCode).send({
      success: false,
    });
  }
};

module.exports = {
  logIn
};
