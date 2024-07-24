const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/",(req,res)=>{
    bcrypt.compare("krishi", "$2b$10$VViBFlw/MjEGcokfczWn1evjBaYdOuQhUZfyZdMROLrlwtaLXps4y", function(err, result) {
       let token = jwt.sign({email:"krisha@gmail.com"},"secret");
       res.cookie("token",token);
       console.log(token);
       res.send("done");
    });
    
})

app.get("/read", function (req,res) {
    let data =jwt.verify(req.cookies.token,"secret");
    console.log(data);
})


app.listen(3000);