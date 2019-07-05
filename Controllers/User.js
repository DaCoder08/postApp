var User = require("../Models/User")

module.exports = {
    addUser: (req, res) => {
        res.render("addUser")
    },
    addUserPost: (req, res) => {
        var body = req.body;
        (new User(body)).save()
        res.redirect("/")
    },
    login: (req, res) => {
        res.render("login")
    },
    loginPost: (req, res) => {
        var body = req.body;

        User.findOne(body, function(err, data){
            if(data == null){
                res.redirect("/login/t")
            }else{
                res.redirect("/dashboard/"+data["_id"])
            }
        })
    }
}