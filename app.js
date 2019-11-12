var express = require("express");
var app = express();

app.set("view-engine","ejs")

app.get("/",function(req,res){
    res.render("home.ejs");
})

app.get("/about",function(req,res){
    res.render("about.ejs");
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });