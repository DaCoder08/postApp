var User = require("../Models/User")
var Post = require("../Models/Post")

module.exports = {
    index: (req, res) => {
        if(req.params.id){
            User.findById(req.params.id, function(err, data){
                if(data != null){
                    Post.find({user: data.uname}, function(err1, data1){
                        res.render("dashboard", {
                            uname:data.uname,
                            id: req.params.id,
                            posts:data1.reverse(),
                            loggedIn:true
                        })
                    })
                }
                else{
                    res.send("Not logged in")
                }
            })
        }else{
            res.send("Not Logged In")
        }
    },
    newPost: (req, res) => {
        (new Post({title:req.body.title, body:req.body.body, user:req.params.uname})).save();
        User.findOne({uname:req.params.uname}, (err, data) => {
            res.redirect("../dashboard/"+data._id)
        })
    } 
}