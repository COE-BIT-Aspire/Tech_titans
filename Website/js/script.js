const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});




const bookNowBtn = document.getElementById('bookNowBtn');
const mobileInput = document.getElementById('num');
const mobileError = document.getElementById('mobileError');

bookNowBtn.addEventListener('click', () => {
    if (!isValidMobileNumber(mobileInput.value)) {
        mobileError.style.display = 'inline';
    } else {
        mobileError.style.display = 'none';                            }
});

function isValidMobileNumber(mobile) {
    const mobileRegex = /^[7-9][0-9]{9}$/;
    return mobileRegex.test(mobile);
}





function openModal() {
    document.getElementById("loginModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}
window.onclick = function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function submitForm(event) {
        event.preventDefault(); 

        closeModal();

        var signupBtn = document.getElementById("signupBtn");
        signupBtn.innerHTML = '<i class="fas fa-user-circle fa-3x" style="color:red;"></i>';
}





function scrollToBookNow() {
    var bookNowSection = document.getElementById("booking");
    bookNowSection.scrollIntoView({ behavior: 'smooth' });
}


function openTripAdvisor() {
    window.open('https://www.tripadvisor.in/Hotels', '_blank');
}