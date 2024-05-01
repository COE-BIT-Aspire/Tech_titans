document.querySelector('.book-now-form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        if (validateDates()) {
            openBookingDetails();
        }
});
            
function validateDates() {
    const checkInDate = new Date(document.getElementById('check-in').value);
    const checkOutDate = new Date(document.getElementById('check-out').value);
    const currentDate = new Date();

    if (checkInDate < currentDate) {
        alert("Check-in date cannot be in the past.");
        return false;
    }

    if (checkOutDate < checkInDate) {
        alert("Check-out date must be greater than or equal to check-in date.");
        return false;
    }

    return true;
}
    

function openBookingDetails() {
    const bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.style.display = 'block';

    const name = document.querySelector('.book-now-form input[type="text"]').value;
    const email = document.querySelector('.book-now-form input[type="email"]').value;
    const checkIn = document.querySelector('.book-now-form input#check-in').value;
    const checkOut = document.querySelector('.book-now-form input#check-out').value;
    const adults = document.querySelector('.book-now-form select[name="Total adults"]').value;
    const children = document.querySelector('.book-now-form select[name="Total children"]').value;
    const rooms = document.querySelector('.book-now-form select[name="Total rooms"]').value;
    const roomType = document.querySelector('.book-now-form select[name="Type of room"]').value;


    const detailsElement = document.getElementById('details');
    detailsElement.innerHTML = `
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Check-in Date: </strong>${checkIn}</p>
        <p><strong>Check-Out date: </strong>${checkOut}</p>
        <p><strong>Check-Out date: </strong>${checkOut}</p>
        <p><strong>Adults: </strong>${adults}</p>
        <p><strong>Children: </strong>${children}</p>
        <p><strong>Rooms: </strong>${rooms}</p>
        <p><strong>Room Type: </strong>${roomType}</p>
        <button onclick="proceedToPayment()">Proceed to Payment</button>

    `;
}
function closeBookingDetails() {
            const bookingDetails = document.getElementById('bookingDetails');
            bookingDetails.style.display = 'none';
}
        
function proceedToPayment() {
        alert('Developing stage...');
    }