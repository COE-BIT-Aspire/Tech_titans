var express=require('express');
const bodyParser = require('body-parser');

var server=express();
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/",(request,response)=>{
   response.sendfile("server.html")
})



server.listen(5000,()=>{
   console.log("express server is running")
})