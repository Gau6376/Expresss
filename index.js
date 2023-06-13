import express from "express";
import path from "path";

const app = express();

const users=[];

// using middlewars
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended : true}));

// setting up view engine
app.set("view engine","ejs");

app.get("/",(req,res)=>{
// res.send("Hi");

// res.sendStatus(404);

// res.json({
//     success:true,
//     products:[],
// });

// res.status(400).send("meri marzi");

// const pathlocation = path.resolve();
// res.sendFile(path.join(pathlocation,"./index.html"));

res.render("index",{name : "Gaurav"});

// res.sendFile("index")

});

app.get("/success",(req,res)=>{
res.render("success");
});


app.post("/contact",(req,res)=>{
// console.log(req.body);
// console.log(req.body.name);

users.push({username : req.body.name, email: req.body.email});

res.redirect("/success");
});

app.get("/users",(req,res)=>{
res.json({
    users,
});
});

app.listen(5000,()=>{
    console.log("server is working");
});
