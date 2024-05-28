const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log("this is middlewaree");
    next();
});
app.use(function(req,res,next){
    console.log("this is middlewaree 2");
    next();
});

// app.get(router,routerhandler)
app.get("/",function(req,res){
    res.send("hello dearr")
})
// app.get("/profile",function(req,res){
//     res.send("hello chudeil")
// })
app.get("/profile",function(req,res,next){
    return next(new Error("Something went wrong!"))
})
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send("Something broke!")
})
app.listen(3000);
