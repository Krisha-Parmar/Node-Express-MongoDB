const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get("/",(req,res)=>{
    bcrypt.compare("krishi", "$2b$10$2fPppGL7ocZY3/HRMdwfS.BBm0Iz0CKI90T/eCEq5Ehqh0DyLvffO", function(err, result) {
        console.log(result);
    });
    
})



app.listen(3000);
// output --> true


//hash->$2b$10$2fPppGL7ocZY3/HRMdwfS.BBm0Iz0CKI90T/eCEq5Ehqh0DyLvffO