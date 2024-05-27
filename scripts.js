const fs = require('fs');
// const { buffer } = require('stream/consumers');
////////create file
fs.writeFile("heyy.txt", "hello! How are you? ", function(err){
    if(err) console.error(err);
    else console.log("done")
})
// fs.appendFile("hey.txt", " I am good  ", function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })
// fs.copyFile("hello.txt","./copy/copy1.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })
//throw an error
// fs.copyFile("hello.txt","./copy2/copy1.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("done")
// })

// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err)
//     else console.log("removed");
// })

// fs.rm("./copy",{recursive: true},(err)=>{
//     if(err) console.error(err)
//     else console.log("removed folder");
// })

////////////////make new folder 
if(!fs.existsSync('./temp')){
    fs.mkdirSync('./temp')
}



// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
fs.mkdir('./tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});

fs.readFile("heyy.txt",'utf8',(err, data)=>{
    if(err) throw err;
    else console.log(data);
})
fs.readdir("./temp",'utf8',(err, data)=>{
    if(err) throw err;
    else console.log(data);
})

