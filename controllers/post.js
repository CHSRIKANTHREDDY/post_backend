const mongoose = require("mongoose");
var Post = mongoose.model("Posts");

const addPost = async (req, res) => {
  try {
    const reqBody = req.body;
    post = new Post(reqBody);
    post = await post.save();
    if (user) {
      res.send({
        success: true,
        data: user,
      });
      } else {
        throw new Error("please enter correct the password");
      }
  } catch (error) {
    res.status(401).send({
      success: false,
    });
  }
};

const getPost = async (req, res) => {
    try {
      let post = await Post.find({}).populate('userId').populate({ 
        path: 'commentId',
        populate: {
          path: 'userId'
        } 
     });
      if (post) {
        res.send({
          success: true,
          data: post,
        });
        } else {
          throw new Error("please enter correct the password");
        }
    } catch (error) {
      res.status(401).send({
        success: false,
      });
    }
  };


module.exports = {
    addPost,
    getPost
};
