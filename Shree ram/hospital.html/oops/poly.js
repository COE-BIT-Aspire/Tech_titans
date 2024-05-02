function calculateArea(length, width) {
   if (arguments.length === 1) {
     return Math.PI * length * length; // Area of circle
   } else if (arguments.length === 2) {
     return length * width; // Area of rectangle
   }
 }
 
 console.log(calculateArea(5));          
 console.log(calculateArea(5, 10));   