const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res)=> {
    res.send("hey");
})

app.get('/create',async (req,res)=> {
    let createduser = await userModel.create({
        name: "krishi parmar",
        email: "xyz@gmail.com",
        username: "krisha parmar"
    })
    res.send(createduser);
})

app.get("/read",async (req,res)=>{
    let users = await userModel.find(); // --> for all users
    // let users = await userModel.find({username: "krisha parmar"});// if no user that name give []-->give array
    // let users = await userModel.findOne({username: "krisha parmar"});// if no user that name give blank--give object

    res.send(users)
})

app.get('/update',async (req,res)=> {
    let updateduser = await userModel.findOneAndUpdate({username: "krishi"},{name: "krishaaa"},{new: true})
    res.send(updateduser);
})

app.get('/delete',async (req,res)=> {
    let users = await userModel.findOneAndDelete({username: "krishi"});
    res.send(users);
})


app.listen(3000);