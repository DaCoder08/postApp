var mongoose = require("mongoose");


var schema = new mongoose.Schema({ uname: 'string', email: 'string', password: "string"});
var User = mongoose.model('User', schema);

module.exports = User