const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get("/",(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("krishi", salt, function(err, hash) {
            console.log(hash);
        });
    });
    
})



app.listen(3000);


//hash->$2b$10$2fPppGL7ocZY3/HRMdwfS.BBm0Iz0CKI90T/eCEq5Ehqh0DyLvffO