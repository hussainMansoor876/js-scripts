// let apiUrl = `https://tyler-2.13357.wl.simvoly.com/api/site`
let apiUrl = `${window.location.origin}/api/site`
let memberRoute = `members/search-by-email`
let groupRoute = `member-groups`
let PLUS5 = 4
let PLUS10 = 5
let apiToken = `w7e7ae734df7c4d56b009d7c6e530befc`

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

        console.log('data', data)

        if (data?.groups?.length) {
            let groups = data?.groups
            let id = Math.max(...groups)

            let idData = await sendRequest(`${apiUrl}/${groupRoute}/${id}`, 'GET')

            console.log('idData', idData)

            if (idData?.name && idData?.name?.toLowerCase()?.includes('plus')) {
                let percentage = Number(idData?.name?.split(' ')?.[1]) / 100

                console.log('percentage', percentage)

                localStorage.setItem('percentage', percentage)
            }
            else {
                localStorage.setItem('percentage', 0)
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

    loginButton.addEventListener('click', () => {
        fetchUserByEmail(emailInput?.value)
    })

    // Add an event listener to save the value in localStorage whenever it changes
    emailInput.addEventListener('input', async function (event) {
        const emailValue = event.target.value

        fetchUserByEmail(emailValue)
    })
});