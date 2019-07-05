var router = require("express")();
var bodyParser = require('body-parser')
var UserController = require("./Controllers/User");
var DashboardController = require("./Controllers/Dashboard");
var PostPageController = require("./Controllers/PostPage");

router.use(bodyParser.urlencoded({
    extended: false
}))

router.get("/", (req, res) => {
    res.render("index")
});

router.get("/addUser", UserController.addUser);

router.post("/addUser", UserController.addUserPost);

router.get("/login/:fail?", UserController.login);

router.post("/login", UserController.loginPost);

router.get("/dashboard/:id?", DashboardController.index)

router.post("/newPost/:uname", DashboardController.newPost)

router.get("/:id?/showPosts", PostPageController.index)

router.get("/post/:id?/:postid", PostPageController.commentsPage)

router.post("/addComment/:id/:postid", PostPageController.addComment)

module.exports =  router