const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

var items=[];
var work=[];

var acqDate=date();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    
});

app.post("/",function(req,res){
    if(req.body.button==="work"){
        res.render("list",{dayVar:"Work",newItems:work});
    }
    else{
        res.render("list",{dayVar:acqDate,newItems:items});
    }

 })

 app.post("/list",function(req,res){
    if(req.body.button==="Work"){
        work.push(req.body.td1);
        res.render("list",{dayVar:"Work",newItems:work});
    }
    else{
        items.push(req.body.td1);
        res.render("list",{dayVar:acqDate,newItems:items});

    }
 })







app.listen(3000,function(){
    console.log("server is running");
})