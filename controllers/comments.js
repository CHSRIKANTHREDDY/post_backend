const mongoose = require("mongoose");
var Comment = mongoose.model("Comments");
var Post = mongoose.model("Posts");
const addComments = async (req, res) => {
  try {
    const reqBody = req.body;
    let body = {
      comment: reqBody.comment,
      userId: reqBody.userId
    }
    let comment = new Comment(body);
    comment = await comment.save();
    await Post.findByIdAndUpdate(reqBody.postId, { $push: { commentId: comment._id } })
    if (comment) {
      res.send({
        success: true,
        data: comment,
      });
      } else {
        throw new Error("user not found");
      }
  } catch (error) {
    res.status(401).send({
      success: false,
    });
  }
};
const deleteComments = async (req, res) => {
    try {
      const reqBody = req.params;
      let comment = await Comment.deleteOne({_id: reqBody.id });
      if (comment) {
        res.send({
          success: true,
          data: comment,
        });
        } else {
          throw new Error("user not found");
        }
    } catch (error) {
      res.status(401).send({
        success: false,
        error: error
      });
    }
  };

module.exports = {
    addComments,
    deleteComments
};
