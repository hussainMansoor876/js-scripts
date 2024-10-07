let apiUrl = `https://tyler-2.13357.wl.simvoly.com/api/site`
let memberRoute = `members/search-by-email`
let apiToken = `w7e7ae734df7c4d56b009d7c6e530befc`

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('input[name="email"]');
    const form = document.querySelector('a[data-role="submit"]');

    console.log('form', form)

    // Check if there's a saved value in localStorage and set it as the input value
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    // Add an event listener to save the value in localStorage whenever it changes
    emailInput.addEventListener('input', function (event) {
        const emailValue = event.target.value
        localStorage.setItem('email', emailValue) // Save to localStorage
    })

    // Add event listener for form submission
    // form.addEventListener('click', function (event) {
    //     event.preventDefault(); // Prevent the form from submitting the traditional way
    //     console.log('Hello')

    //     const emailValue = emailInput.value;

    //     // Send the email to the backend
    //     fetch(`${apiUrl}/${memberRoute}?${emailValue}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${apiToken}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Email sent:', data)
    //         })
    //         .catch(error => {
    //             console.error('Error sending email:', error)
    //         });
    // });
});