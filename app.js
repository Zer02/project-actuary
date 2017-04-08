var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/startups", function(req, res){
    res.render("startups");
});

app.get("/videos", function(req, res){
    res.render("videos");
})

app.get("/fitness", function(req, res){
    res.render("fitness");
})

app.get("/cart", function(req, res){
    res.render("cart");
})

app.listen(process.env.PORT, process.env.IP);