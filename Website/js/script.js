document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.querySelector('.form-data .check-btn');
    const formDataSection = document.querySelector('#form-data');
    const bookNowSection = document.querySelector('#book-now');
    
    checkButton.addEventListener('click', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Hide the form-data section and show the book-now section
        formDataSection.style.display = 'none';
        bookNowSection.style.display = 'block';
    });
});
