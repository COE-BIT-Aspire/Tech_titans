const fs = require('fs');

// console.log("1");
// //synchronus
// const wr = fs.readFileSync('./text.txt','utf-8');
// console.log(wr);

// console.log('2');

// //asynchronus-bcoz we didn;t mention sync in the method name
// fs.readFile('./text.txt','utf-8', (error,data) => {//error callback is used if any error in file, if no error data on file is sent
//     if (error)
//         console.log(error);
//     else
//         console.log(data);
// })

// console.log('3');

// fs.writeFileSync('./wel.txt', 'hello!!!!');// to create file and its content

// fs.appendFile('text.txt', ' Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

var os = require('os');
console.log("Platform: " + os.platform());
console.log("Name: " + os.type());
console.log("Architecture: " + os.arch());
console.log("Host: " + os.hostname());
console.log("Directory: " + os.tmpdir());
console.log("Up: " + os.uptime());

