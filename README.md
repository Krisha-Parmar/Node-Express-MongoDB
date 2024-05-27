# what is node.js?
<br>
<p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.<br> Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.<br> Node.js lets developers use JavaScript to write command line tools and for server-side scripting. </p>

# What is npm?
<br>
<p>npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.</p>
<br>
<p> npm init => package.json =>details of projects</p><br>

# FileSystem methods
<p>https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsappendfilepath-data-options-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsrenameoldpath-newpath-callback<br>https://nodejs.org/docs/latest/api/fs.html#fscopyfilesrc-dest-mode-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsunlinkpath-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsrmpath-options-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsmkdirpath-options-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback<br>https://nodejs.org/docs/latest/api/fs.html#fsreaddirpath-options-callback<br></p>

# HTTP
<h3>protocal => rules</h3>
<br>
<h3> http protocal <h3><br> <p>not possible any connection between user to server and server to user</p>
<br>
<h3>HTTP create server<br></h3>
<p>https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener</p>
<pre>const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("hello world!");
})

server.listen(3000);</pre>





