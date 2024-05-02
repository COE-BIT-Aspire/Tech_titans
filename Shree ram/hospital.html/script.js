function reloadPage() {
   location.reload();
}

document.getElementById('loginBtn').addEventListener('click', function() {
   document.getElementById('loginPopup').style.display = 'block';
   document.body.classList.add('blur'); // Add 'blur' class to body
 });
 
 document.getElementById('closeBtn').addEventListener('click', function() {
   document.getElementById('loginPopup').style.display = 'none';
   document.body.classList.remove('blur'); // Remove 'blur' class from body
 });
 
 window.addEventListener('click', function(event) {
   if (event.target == document.getElementById('loginPopup')) {
     document.getElementById('loginPopup').style.display = 'none';
     document.body.classList.remove('blur'); // Remove 'blur' class from body
   }
 });