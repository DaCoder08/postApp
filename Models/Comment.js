const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    postId: "string",
    comment: "string",
    user: "string"
})

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;