var Post = require("../Models/Post")
var Comment = require("../Models/Comment")
var User = require("../Models/User")

module.exports = {
    index: (req, res) => {
        if(req.params.id){
            User.findById(req.params.id, function(err, data2){
                if(data2 != null){
                    Post.find({}, (err, data) => {
                        res.render("postpage", {posts: data.reverse(), loggedIn:true, userid: req.params.id})
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
    commentsPage: (req, res) => {
        if(req.params.id){
            User.findById(req.params.id, function(err, data2){
                if(data2 != null){
                    Post.findById(req.params.postid, (err, data) => {
                        Comment.find({postId:req.params.postid}, (err, data1) => {
                            console.log(data1)
                            res.render('commentsPage', {
                                post: data,
                                comments: data1,
                                userid: req.params.id
                            })
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
    addComment: (req, res) => {
        User.findById(req.params.id, function (err, data) {
          (new Comment({postId: req.params.postid, comment: req.body.comment, user: data.uname})).save()  
          res.redirect("/")
        })
    }
}