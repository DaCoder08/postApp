const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

//local

//mongoose.connect("mongodb://127.0.0.1:27017/profile-app", {useNewUrlParser: true})

//cloud

mongoose.connect("mongodb+srv://Bob:bob123@cluster0-qdwaj.mongodb.net/postApp", {useNewUrlParser: true})

// Automatically sets view engine and adds dot notation to app.render
app.use(require('express-edge'));
app.set('views', `${__dirname}/Views`);

app.use(require("./routes"))

app.listen(3000);
