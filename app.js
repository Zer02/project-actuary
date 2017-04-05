var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.redirect("videos");
});

app.get("/articles", function(req, res){
    res.render("articles");
});

app.get("/videos", function(req, res){
    res.render("videos");
})

app.get("/fitness", function(req, res){
    res.render("fitness");
})

app.listen(process.env.PORT, process.env.IP);