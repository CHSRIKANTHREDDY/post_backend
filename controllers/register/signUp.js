const mongoose = require("mongoose");
const saltRounds = Number(process.env.saltRounds);
var User = mongoose.model("Users");
const signUp = async (req, res) => {
  try {
    const reqBody = req.body;
    let user = await User.findOne({ email: reqBody.email });
    if (user) {
      throw new Error("user is already exist");
    }
    user = new User(reqBody);
    user = await user.save();
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      error: error
    });
  }
};

module.exports = {
  signUp
};
