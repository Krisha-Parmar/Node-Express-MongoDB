const fs = require('fs');
fs.writeFile("hey.txt", "hello! How are you? ", function(err){
    if(err) console.error(err);
    else console.log("done")
})
fs.appendFile("hey.txt", " I am good  ", function(err){
    if(err) console.error(err);
    else console.log("done")
})
fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done")
})
fs.copyFile("hello.txt","./copy/copy1.txt",function(err){
    if(err) console.error(err);
    else console.log("done")
})
fs.copyFile("hello.txt","./copy2/copy1.txt",function(err){
    if(err) console.error(err.message);
    else console.log("done")
})