const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get("/",(req,res)=>{
    res.send("hey");
})
app.get("/create",async (req,res)=>{
    let user =  await userModel.create({
        username: "krishi",
        age: 20,
        email:"krishaparmar@gmail.com"
    })
    res.send(user)
})

app.get("/post/create",async (req,res)=>{
    let post = await postModel.create({
        postdata: "hello how are you?",
        user:"66a20cb684107f0d7012aa74" 
    })
    let user = await userModel.findOne({_id:"66a20cb684107f0d7012aa74"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user})
})

app.listen(3000);