// let apiUrl = `https://tyler-2.13357.wl.simvoly.com/api/site`
var memberRoute = `members/search-by-email`
var groupRoute = `member-groups`
let PLUS5 = 4
let PLUS10 = 5

function validateEmail(email) {
    // Regular expression for validating general email addresses
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function sendRequest(url, method, body = null, query = {}) {
    // Construct query string if there are query parameters
    const queryString = new URLSearchParams(query).toString();
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    // Set up fetch options
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        }
    };

    // Add body if the method is not GET and there is body data
    if (method !== 'GET' && body) {
        options.body = JSON.stringify(body);
    }

    return fetch(fullUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const fetchUserByEmail = async (emailValue) => {
    if (validateEmail(emailValue)) {
        localStorage.setItem('email', emailValue)

        let data = await sendRequest(`${apiUrl}/${memberRoute}`, 'GET', null, { email: emailValue })

        // console.log('data', data)

        if (data?.groups?.length) {
            let groups = data?.groups
            let id = Math.max(...groups)

            let idData = await sendRequest(`${apiUrl}/${groupRoute}/${id}`, 'GET')

            // console.log('Data', idData)

            if (idData?.name && idData?.name?.toLowerCase()?.includes('plus')) {
                localStorage.setItem('plus', JSON.stringify(true))
                localStorage.setItem('groupName', idData?.name?.toLowerCase()?.replace(/ /g, '-'))
                localStorage.setItem('percentage', 0)
            }
            else {
                localStorage.setItem('plus', JSON.stringify(false))
                localStorage.removeItem('groupName')
                localStorage.removeItem('email')
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello !')
    const emailInput = document.querySelector('input[name="email"]')
    const loginButton = document.querySelector('a[data-role="submit"]')

    // Check if there's a saved value in localStorage and set it as the input value
    const savedEmail = localStorage.getItem('email')
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    loginButton.addEventListener('click', (event) => {
        event.preventDefault()
        fetchUserByEmail(emailInput?.value)
    })

    loginButton.addEventListener('submit', (event) => {
        event.preventDefault()
        fetchUserByEmail(emailInput?.value)
    })

    // Add an event listener to save the value in localStorage whenever it changes
    emailInput.addEventListener('input', async function (event) {
        const emailValue = event.target.value

        fetchUserByEmail(emailValue)
    })
});