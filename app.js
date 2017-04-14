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

app.get("/entrepreneurs", function(req, res) {
    res.render("entrepreneurs");
})

app.get("/blog", function(req, res) {
    res.render("blog");
})

app.get("/lolanalytics", function(req, res) {
    res.render("lolanalytics");
})

// Hidden Routes
app.get("/taxes", function(req, res){
    res.render("taxes");
})

app.get("/jobs", function(req, res){
    res.render("jobs");
})

app.get("/dev", function(req, res){
    res.render("dev");
})

app.listen(process.env.PORT, process.env.IP);