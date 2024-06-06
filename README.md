# what is node.js?
<br>
<p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.<br> Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.<br> Node.js lets developers use JavaScript to write command line tools and for server-side scripting. </p>

# What is npm?
<br>
<p>npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.</p><br>
<p>Gives diffrent package</p>
<br>
<p> npm init => package.json =>details of projects</p><br>

<p>module => node js code already install</p><br>
<p>package => download from npm</p><br>
<p>dependencies => package and package`s dependencies</p><br>
<p>devdependencies => use only that time when we make an app or any project but after deploy of that project we not use that : npm i nodemon --save-dev </p><br>
<p>scripts => in scripts add coustom scripts and add default scripts PATH</p><br>
<h2>For install any package from npm: npm i package_name <br> for particular:npm i package_name@version </h2><br>
<h2>For uninstall any package from npm: npm uninstall package_name</h2><br>
<p>installed and uninstall package will be see in package.json dependencies.</p><br>
<h3>node_modules</h3><br><p>dependencies`s dependencies</p><br>
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
    res.end("hello world!!");
})

server.listen(3000);</pre>

# express.js

<h3>exprees js is npm package</h3>
<br>
<h3>Framework : work with flow , express js is framework<br> manage everuthing from receiving the response and giving the response<br>Middleware ->    laptop(image) =>=> ||Middleware(somework)|| =>=> (server)Router<br>
</h3>
<pre>app.use(function(req,res,next)) </pre>
<p>use() => all req first through this , before router this use will be work</p><br>
<p>next() => after work of use , next for that req accept by routers </p>
<p>working:- get()=>use(,next())=>get(work)</p> 

# cookies and sessions
<b>Cookies<br><b>
<p>Cookies are small pieces of data stored on the client-side (in the browser). They are sent back to the server with each request to maintain state.</p><br><b>Sessions<b><br>
<p>Sessions store data on the server side and use a session identifier (usually stored in a cookie) to link the client to the session data on the server.</p><br>
<pre>
<p>parsers form</p>
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 </pre>
<p>app.use(express.json());<br>
-Function: Parses JSON-formatted request bodies.<br>
-Use Case: API requests with JSON payloads.<br><br>
app.use(express.urlencoded({extended:true}));<br>
-Function: Parses URL-encoded request bodies.<br>
-Use Case: Form submissions or requests with URL-encoded data.<br>
-extended: true: Uses the qs library to parse more complex objects.<br></p>

<br>
<p>ejs : frontend look , dynamic and calculation perform, similar to html</p>
<br><br>

# Setup ejs
<br>
<p>index.js(app.set('view engine','ejs') => create views folder => in views create index.ejs => for public folder add path in index.js use path.join(_dirname,'public') and create public folder => in public folder create 3 folder 1.stylesheets 2.images 3.javascripts => add path in index.ejs but after public ex. /javascrpits/script.js => javascripts hoin using scripts and css using link. )</p><br>

# dynamic routing
<pre>app.get("/profile/:username",function(req,res){
    res.send("chal raha hai");
});</pre>

<br>
<p>using this : , get(_) , _ convert to a variable, and this route is dynamic </p><br>
<pre>req.params.username</pre>
<br>
<p>: => req.params</p>









