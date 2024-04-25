var http = require('http');
var dt = require('./sam');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});// 200-status(ok),if the res needs to be displayed as html file
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080, () => {
    console.log("run....");
});