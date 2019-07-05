var mongoose = require("mongoose");

var schema = new mongoose.Schema({ title: 'string', body: 'string', user: "string"});

var Post = mongoose.model('Post', schema);

module.exports = Post;

