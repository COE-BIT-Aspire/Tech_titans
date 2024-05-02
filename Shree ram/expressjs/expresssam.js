var express=require('express');
const bodyParser = require('body-parser');

var server=express();
server.use(bodyParser.urlencoded({ extended: false }));

server.post("/sign",(request,response)=>{
   response.send("<h1>expressjs server hello</h1>")
})

server.get("/home",(request,response)=>{
  //response.send("<h1>expressjs server home hello</h1>")
   var usernmae=request.query['userna'];
   response.send("<h1>expressjs welcome"+usernmae+"</h1>")
})

server.listen(5000,()=>{
   console.log("express server is running")
})