const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const userModel = require("./models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render('index')
});

app.post('/create',(req,res)=>{
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
        let createUser = await userModel.create({
             username,
             email,
             password:hash,
             age
            })

            let token = jwt.sign({email},"shhhhhhhh");
            res.cookie("token",token)

            res.send(createUser); 
        })
    })

    
});

app.get("/login",function(req,res){
    res.render('login')
})
app.post("/login",async function(req,res){
    let user= await userModel.findOne({email: req.body.email});
    if(!user) return res.send("Something is wrong!")
    // console.log(user.password=>saved password when we create account, req.body.password=>in log in we enter password);
    bcrypt.compare(req.body.password,user.password,function(err,result){
        if(result) {
            
            let token = jwt.sign({email:user.email},"shhhhhhhh");
            res.cookie("token",token);
            res.send("you can login");
        }
        else res.send("something is wrong");
        
    });
    
});

app.get("/logout",function(req,res){
    res.cookie("token","");
    res.redirect("/");
});

app.listen(3000);