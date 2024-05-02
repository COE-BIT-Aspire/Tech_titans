var fs=require('fs');
var data="file which return bt js program";
console.log("file write starts")
//fs.writeFileSync("input.txt",data);
fs.writeFile("input1.txt",data,()=>{
   console.log("file write completes");
});
console.log("file write completes");
console.log("program ends");