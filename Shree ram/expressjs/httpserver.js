var http= require('http');

var server=http.createServer((request,response)=>{

if(request.url=="/")
response.write("<h1>hello world</h1>")
else if(request.url=="/home")
response.write("<h1>hello world home</h1>")
})


server.listen(3000,()=>{
   console.log("http server is running")
})
