document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('input[name="email"]');

    // Check if there's a saved value in localStorage and set it as the input value
    const savedEmail = localStorage.getItem('email')
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    // Add an event listener to save the value in localStorage whenever it changes
    emailInput.addEventListener('input', function (event) {
        const emailValue = event.target.value;
        localStorage.setItem('email', emailValue); // Save to localStorage
    });
});