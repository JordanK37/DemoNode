// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>"); 
   response.write("<h2>Jordan Kelly - q95n742</h2> \
         <p>Running node server on port 3014")   
   response.end();
}).listen(3014);