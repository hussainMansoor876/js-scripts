const categories = [
    {
        id: 11,
        name: 'Traffic',
        url: 'traffic',
        parentCategory: 8
    },
    {
        id: 12,
        name: 'Surveyor',
        url: 'surveyor',
        parentCategory: 8
    },
    {
        id: 53,
        name: 'Primease',
        url: 'primease',
        parentCategory: 50
    },
    {
        id: 39,
        name: 'Cooling Wear',
        url: 'cooling-wear-r-m',
        parentCategory: 38
    },
    {
        id: 15,
        name: 'Jackets',
        url: 'jackets',
        parentCategory: 9
    },
    {
        id: 36,
        name: 'Faller Pants',
        url: 'faller-pants',
        parentCategory: 35
    },
    {
        id: 29,
        name: 'Vests',
        url: 'vests',
        parentCategory: 28
    },
    {
        id: 25,
        name: 'Jackets',
        url: 'jackets',
        parentCategory: 10
    },
    {
        id: 23,
        name: 'Short Sleeve',
        url: 'short-sleeve',
        parentCategory: 21
    },
    {
        id: 30,
        name: 'Jackets',
        url: 'jackets',
        parentCategory: 28
    },
    {
        id: 40,
        name: 'Work Boots & Insole',
        url: 'work-boots-insole',
        parentCategory: 38
    },
    {
        id: 37,
        name: 'Logger Chaps',
        url: 'logger-chaps',
        parentCategory: 35
    },
    {
        id: 26,
        name: 'Pants',
        url: 'pants',
        parentCategory: 10
    },
    {
        id: 24,
        name: 'Long Sleeve',
        url: 'long-sleeve',
        parentCategory: 21
    },
    {
        id: 16,
        name: 'Hoodies',
        url: 'hoodies',
        parentCategory: 9
    },
    {
        id: 31,
        name: 'Bib Pants',
        url: 'bib-pants',
        parentCategory: 28
    },
    {
        id: 13,
        name: 'Supervisor',
        url: 'supervisor',
        parentCategory: 8
    },
    {
        id: 17,
        name: 'Sweatshirts',
        url: 'sweatshirts',
        parentCategory: 9
    },
    {
        id: 27,
        name: 'Bib Pants',
        url: 'bib-pants',
        parentCategory: 10
    },
    {
        id: 18,
        name: 'Work Pants',
        url: 'work-pants',
        parentCategory: 9
    },
    {
        id: 32,
        name: 'Coveralls',
        url: 'coveralls',
        parentCategory: 28
    },
    {
        id: 14,
        name: 'First Aid',
        url: 'first-aid',
        parentCategory: 8
    },
    {
        id: 42,
        name: 'Headwear',
        url: 'headwear',
        parentCategory: 38
    },
    {
        id: 49,
        name: 'Gloves and Disposables',
        url: 'disposable-coverall',
        parentCategory: 38
    },
    {
        id: 19,
        name: 'Overalls',
        url: 'overalls',
        parentCategory: 9
    },
    {
        id: 33,
        name: 'Hoodies',
        url: 'hoodies',
        parentCategory: 28
    },
    {
        id: 34,
        name: 'FR Headwear',
        url: 'fr-headwear',
        parentCategory: 28
    },
    {
        id: 44,
        name: 'PPE Cleaners',
        url: 'ppe-cleaners',
        parentCategory: 38
    },
    {
        id: 20,
        name: 'Coveralls',
        url: 'coveralls',
        parentCategory: 9
    },
    {
        id: 45,
        name: 'Cones & Delineators',
        url: 'cones-delineators',
        parentCategory: 38
    },
    {
        id: 21,
        name: 'T-Shirts',
        url: 'short-t-shirts',
        parentCategory: 9
    },
    {
        id: 51,
        name: 'Pants',
        url: 'pants',
        parentCategory: 28
    },
    {
        id: 8,
        name: 'Safety Vests',
        url: 'safety-vests',
        parentCategory: 0
    },
    {
        id: 46,
        name: 'Wands, Signs & Tape',
        url: 'wands-signs-tape',
        parentCategory: 38
    },
    {
        id: 22,
        name: 'Work Shorts',
        url: 'long-t-shirts',
        parentCategory: 9
    },
    {
        id: 48,
        name: 'Belt & Suspenders',
        url: 'belt-suspenders',
        parentCategory: 38
    },
    {
        id: 47,
        name: 'Sashes & Bands',
        url: 'sashes-bands',
        parentCategory: 38
    },
    {
        id: 9,
        name: 'Safety Wear',
        url: 'safety-wear',
        parentCategory: 0
    },
    {
        id: 10,
        name: 'Raingear',
        url: 'raingear',
        parentCategory: 0
    },
    {
        id: 28,
        name: 'Fire Retardant',
        url: 'fire-retardant',
        parentCategory: 0
    },
    {
        id: 35,
        name: 'Chainsaw Safety',
        url: 'chainsaw-safety',
        parentCategory: 0
    },
    {
        id: 38,
        name: 'Accessories',
        url: 'accessories-r-m',
        parentCategory: 0
    },
    {
        id: 50,
        name: 'Activewear',
        url: 'activewear',
        parentCategory: 0
    },
    {
        id: 52,
        name: 'Zorrel ',
        url: 'zorrel',
        parentCategory: 50
    }
]

function sendRequest(url, method, body = null, queries = []) {
    // Construct query string from multiple query objects
    const queryParams = new URLSearchParams()

    // Merge all query objects into one
    queries.forEach(query => {
        Object.entries(query).forEach(([key, value]) => {
            queryParams.append(key, value)
        })
    })

    const queryString = queryParams.toString()
    const fullUrl = queryString ? `${url}?${queryString}` : url

    // Set up fetch options
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        }
    }

    // Add body if the method is not GET and there is body data
    if (method !== 'GET' && body) {
        options.body = JSON.stringify(body)
    }

    return fetch(fullUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

function sortByKey(arr, key) {
    return arr.sort((a, b) => a[key] - b[key])
}


let apiUrl = `${window.location.origin}/api/site`
let productRoute = `products`
var groupRoute = `member-groups`
var memberRoute = `members/search-by-email`
let PLUS5 = 4
let PLUS10 = 5
let apiToken = `w7e7ae734df7c4d56b009d7c6e530befc`

let routeURL = window.location.pathname?.slice(1,)?.split('/')
let subRoute = routeURL?.[1]
routeURL = routeURL?.[0]

const savedEmail = localStorage.getItem('email')
var isPlus = localStorage.getItem('plus')
isPlus = JSON.parse(isPlus) || false
var groupName = localStorage.getItem('groupName')
var isSessionExpired = false
let selectedProduct = null
let selectedProductData = null

let groupPercentage = {
    'plus-10': {
        percentage: 1.1,
        discount: 10,
    },
    'plus-5': {
        percentage: 1.05,
        discount: 5,
    }
}

let safetyVestRM = [
    {
        id: 14,
        name: 'First Aid',
        url: 'first-aid',
        parentCategory: 8
    },
    {
        id: 13,
        name: 'Supervisor',
        url: 'supervisor',
        parentCategory: 8
    },
    {
        id: 12,
        name: 'Surveyor',
        url: 'surveyor',
        parentCategory: 8
    },
    {
        id: 11,
        name: 'Traffic',
        url: 'traffic',
        parentCategory: 8
    },
    {
        id: 29,
        name: 'Vests',
        url: 'vests',
        parentCategory: 28
    }
]

let category = [categories.find((v) => routeURL.includes(v?.url))]
if (routeURL === 'safety-vests-r-m') {
    category = safetyVestRM
}

function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountAmount = originalPrice - discountedPrice
    const discountPercentage = (discountAmount / originalPrice) * 100
    return discountPercentage.toFixed(0)
}

const handleNewChild = (parentDiv) => {
    let percentage = JSON.parse(localStorage.getItem('percentage')) || 0

    let firstProduct = parentDiv.firstElementChild
    let prices = firstProduct.children?.[1]?.children?.[0]?.children?.[0]?.children?.[2]?.firstElementChild?.childNodes
    let newPrice = parseFloat(prices?.[0]?.nodeValue?.split('$')?.slice(-1,)[0])
    let oldPrice = parseFloat(prices?.[1]?.innerHTML?.split('$')?.slice(-1,)[0])
    percentage = calculateDiscountPercentage(oldPrice, newPrice) / 100
    localStorage.setItem('percentage', JSON.stringify(percentage))

    Array.from(parentDiv.children).forEach(child => {
        // let events = child?.children?.[0]?.children?.[0]?.children?.[0]?.children?.[0]
        let events = child.querySelector('div.quick-buttons-wrapper-inner.flex.align-center.justify-center')
        let title = child.querySelector('a.highlightColor')?.innerHTML
        for (var v of events.children) {
            // v.setAttribute('data-role', 'addToCartNew')
            // v.removeAttribute('data-role')
            // console.log('v', v)

            // v.addEventListener('click', () => {
            //     console.log('title', title)
            //     v.classList.add("disabled")
            //     // console.log('quick-view-overlay visible animate', document.getElementsByClassName('quick-view-overlay'))
            //     // document.getElementsByClassName('quick-view-overlay')[0].className = `quick-view-overlay visible animate`
            // })
        }
        // events.addEventListener('mouseover', async () => {
        //     if (title && !isMouseOver) {
        //         let data = await sendRequest(`${apiUrl}/${productRoute}`, 'GET', null, [{ category_id: category?.id }, { limit: 50 }, { title }])

        //         console.log('data', data)
        //         isMouseOver = true
        //     }
        // })

        // events.addEventListener('mouseout', async (event) => {
        //     isMouseOver = false
        // })
        let prices = child?.children?.[1]?.children?.[0]?.children?.[0]?.children?.[2]?.firstElementChild?.childNodes
        let textValue = prices?.[0].nodeValue?.split('$')?.[0] || ``
        let price = parseFloat(prices?.[1].innerHTML?.split('$')?.slice(-1,)[0])
        prices[0].nodeValue = `${textValue}$${(price + (price * percentage)).toFixed(2)}`
    })

    // console.log('quick-view-wrapper', document.querySelectorAll('.quick-view-wrapper'))
}

function calculateIncreasedPrice(targetPriceAfterDiscount, discountPercentage) {
    // Calculate the increased price before the discount
    const increasedPrice = targetPriceAfterDiscount / (1 - discountPercentage / 100)
    return parseFloat(increasedPrice.toFixed(2))
}

const updateProduct = async (e) => {
    let data = await sendRequest(`${apiUrl}/${productRoute}/${e?.id}`, 'GET', null)
    var percentage = JSON.parse(localStorage.getItem('percentage')) || 0
    let roundedDiscountInPercent = e?.roundedDiscountInPercent || (percentage * 100)
    for (var y of data?.variants) {
        if (y?.price) {
            y.price = calculateIncreasedPrice(y?.price * ((100 + roundedDiscountInPercent) / 100), roundedDiscountInPercent)
        }
    }

    data.url = `${data?.url}-${groupName}`
    data.hidden = true
    selectedProduct = await sendRequest(`${apiUrl}/${productRoute}`, 'POST', data, [{ update_existing_product_by_url: true }])

    return selectedProduct
}

function validateEmail(email) {
    // Regular expression for validating general email addresses
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return emailRegex.test(email)
}

const fetchUserByEmail = async (emailValue) => {
    // alert('Hello')
    try {
        if (validateEmail(emailValue)) {
            localStorage.setItem('email', emailValue)

            let data = await sendRequest(`${apiUrl}/${memberRoute}`, 'GET', null, [{ email: emailValue }])

            console.log('data', data)

            if (data?.email?.length && data?.approved) {
                localStorage.setItem('lastActivity', Date.now())
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
                    }
                }
            }
            else {
                localStorage.removeItem('email')
                localStorage.removeItem('lastActivity')
            }

        }
    }
    catch (e) {
        console.log('e', e)
    }
}

try {
    var sessionDetails = JSON.parse(localStorage.getItem('session-details')) || {}
    var email = localStorage.getItem('email')

    if (sessionDetails?.sessionCutoffTime && Date.now() <= sessionDetails?.sessionCutoffTime) {
        isSessionExpired = true
    }

    if (subRoute?.length && (!validateEmail(email) || isSessionExpired)) {
        try {
            var productDetails = document.getElementsByClassName('product-body-container-inner')
            productDetails = productDetails[0]
            var productPriceDiv = productDetails?.querySelector('div.product-price')
            var price = productDetails?.querySelector('span.current-price')
            var sizeSelect = productDetails?.querySelector('select.product-variation')
            // console.log('price', price)
            // console.log('productDetails', productDetails)
            productPriceDiv.style.display = 'none'

            const addToCartDiv = productDetails.querySelector('.addtocart-wrapper').querySelector('.col20.flex.add-to-cart-inner')
            // console.log('addToCartDiv', addToCartDiv)
            const clickLogin = () => {
                window.location.href = `https://${window.location.hostname}/signin?backTo=%2F${routeURL}%2F${subRoute}`
            }
            addToCartDiv.firstElementChild.style.display = 'none'
            addToCartDiv.children[1].innerHTML = ''
            const loginLink = document.createElement('a')
            loginLink.className = 'primaryColor-bg2 add-to-cart t-center col20'
            loginLink.textContent = 'Login'
            loginLink.onclick = clickLogin

            addToCartDiv.children[1].appendChild(loginLink)
        }
        catch (e) {
            console.log('e', e)
        }
    }
}
catch (e) {
    console.log('e', e)
}

try {
    let lastActivity = JSON.parse(localStorage.getItem('lastActivity'))

    if (lastActivity) {
        const oneHour = 60 * 60 * 1000 // One hour in milliseconds
        const currentTime = Date.now() // Get current time in milliseconds

        // Check if more than one hour has passed
        if (currentTime - lastActivity > oneHour) {
            if (savedEmail?.length) {
                localStorage.removeItem('email') // Remove email from local storage
                console.log('Email removed from local storage due to inactivity.')

                window.location.reload()
            }
        }
        else {
            console.log('Last activity is within the last hour.')
            localStorage.setItem('lastActivity', Date.now())
        }
    }
    else {
        if (savedEmail?.length) {
            localStorage.removeItem('email') // Remove email from local storage
            console.log('Email removed from local storage due to inactivity.')

            window.location.reload()
        }
        console.log('No lastActivity found in localStorage.')
    }
}
catch (e) {
    console.log('e', e)
}

try {
    if (subRoute?.length && (subRoute === 'cart' || subRoute === 'checkout')) {
        const email = localStorage.getItem('email')
        if (!validateEmail(email)) {
            window.location.href = `https://${window.location.hostname}`
        }
    }
}
catch (e) {
    console.log('e', e)
}

const validateSearch = async () => {
    try {
        if (location?.pathname === '/search') {
            var searchQuery = new URLSearchParams(location?.search)?.get('q')
            var searchInput = document.querySelector('input.search-input.border-type-all')

            let data = await sendRequest(`${apiUrl}/${productRoute}?title=${searchQuery}`, 'GET', null)

            console.log('data', data)
            console.log('searchQuery', searchQuery)

            var divData = document.querySelector('.content-wrapper')

            const newContent = document.createElement('div')
            newContent.className = 'content'
            newContent.innerHTML = ``

            let htmlData = `
            <div class="content">
            <div class="grid-row search-results-title">
            <div class="grid-content">
                <div class="grid-column col20">
                <div class="widget-row">
                    <h1>Search results:</h1>
                    <span>${searchQuery}</span>
                </div>
                </div>
            </div>
            </div>
            <div class="grid-row">
        <div class="grid-content">
            <div class="grid-column col20">
                <div class="widget-row">
                    <div class="widget widgetResponsive storeWidget col20" id="store-search-results">
                        <div
                            class="product-list-wrapper full-width-layout col20 f-left products-per-row-3 style-2 center-align quick-view-1  image-positioned">
                            <div class="products-list">`

            for (var v of data?.items) {
                htmlData += `<div class="product-item fit-height " data-slide="" data-idx="0" data-id="207"
                                    style="background: transparent; padding: 0px 0px; border-radius: 0px; width: 30%; margin: 0 5% 0 0; ">
                                    <div class="product-main-photo has-badge"
                                        style="padding-bottom: 75%;background-color: transparent;">
                                        <div class="product-photo-inner-wrapper">
                                            <div class="quick-buttons-wrapper flex align-center justify-center">
                                                <div
                                                    class="quick-buttons-wrapper-inner flex align-center justify-center">
                                                    <a class="quick-store-button flex align-center"
                                                        data-role="addToCart" data-process="cart"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            enable-background="new 0 0 24 24" height="24px"
                                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                                            <g>
                                                                <rect fill="none" height="24" width="24"></rect>
                                                                <path
                                                                    d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z">
                                                                </path>
                                                            </g>
                                                        </svg></a> <a class="quick-store-button flex align-center"
                                                        data-role="viewProduct"><svg xmlns="http://www.w3.org/2000/svg"
                                                            enable-background="new 0 0 24 24" height="24px"
                                                            viewBox="0 0 24 24" width="18px" fill="#000000">
                                                            <rect fill="none" height="24" width="24"></rect>
                                                            <polygon
                                                                points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71">
                                                            </polygon>
                                                        </svg></a>
                                                </div>
                                            </div><a href="/safety-products-catalog/bk895org"><img
                                                    src="${v?.images?.[0]}"
                                                    alt="" style="border-radius: 10px;"></a>
                                        </div>
                                    </div>
                                    <div class="product-item-description">
                                        <div>
                                            <div class="title-price-wrapper-1">
                                                <h3 class=""><a href="/safety-products-catalog/bk895org"
                                                        class="highlightColor">${v?.title}</a></h3>
                                                <div class="col20 f-left product-stars flex align-center">
                                                    <div class="product-stars-inner"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="black" width="18px" height="18px" class="full-star">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                                            </path>
                                                        </svg> <svg xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="black" width="18px" height="18px"
                                                            class="full-star">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                                            </path>
                                                        </svg> <svg xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="black" width="18px" height="18px"
                                                            class="full-star">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                                            </path>
                                                        </svg> <svg xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="black" width="18px" height="18px"
                                                            class="full-star">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                                            </path>
                                                        </svg> <svg xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="black" width="18px" height="18px">
                                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                            <path
                                                                d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z">
                                                            </path>
                                                        </svg> </div> <a href="" class="product-reviews-link">84
                                                        Reviews</a>
                                                </div>
                                                <span class="product-item-price "><a href="/safety-products-catalog/bk895blk">From&nbsp;$42.35<span class="scratched">$42.35</span></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            }

            htmlData += `           </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>`

            // console.log('divData', divData.children)
            // const newElement = document.createElement('div')
            // newElement.innerHTML = htmlData
            console.log('***', divData.children)


            // divData.appendChild(newElement)

            divData.innerHTML = htmlData
        }
    }
    catch (e) {
        console.log('e', e)
    }
}

validateSearch()

document.addEventListener('DOMContentLoaded', async () => {
    // try {
    //     console.log('routeURL', routeURL)
    //     if (routeURL !== 'signin') {
    //         setTimeout(() => {
    //             var signinButton = document.getElementsByClassName('signin-button')
    //             console.log('signinButton', signinButton)
    //             if (signinButton && savedEmail) {
    //                 console.log('session expired')
    //                 localStorage.removeItem('email')
    //                 localStorage.removeItem('lastActivity')

    //                 // window.location.reload()
    //             }
    //         }, 2000)
    //     }
    // }
    // catch (e) {
    //     console.log('e', e)
    // }

    try {
        setTimeout(() => {
            var cartDiv = document.querySelector('.col20.f-left.cart-table')

            if (cartDiv?.children?.length) {
                var links = cartDiv.querySelectorAll('a')
                links.forEach((link) => {
                    if (link?.href?.endsWith('-plus-5') || link?.href?.endsWith('-plus-10')) {
                        link.href = link?.href?.replace(/-plus-(5|10)$/, '')
                    }
                })
            }
        }, 500)
    }
    catch (e) {
        console.log('e', e)
    }

    try {
        setTimeout(() => {
            var logoutButton = document.getElementsByClassName('member-logout-button')

            if (logoutButton?.length) {
                logoutButton[0].addEventListener('click', () => localStorage.clear())
            }
        }, 500)
    }
    catch (e) {
        console.log('e', e)
    }

    try {
        if (subRoute?.length) {
            let isPlus = JSON.parse(localStorage.getItem('plus')) || false
            var groupName = localStorage.getItem('groupName')
            var percentage = JSON.parse(localStorage.getItem('percentage')) || 0
            var sessionDetails = JSON.parse(localStorage.getItem('session-details')) || {}
            // var email = localStorage.getItem('email')

            // alert(`Email: ${email}`)

            if (!percentage && groupName?.length) {
                percentage = groupName === 'plus-5' ? 0.05 : 0.1
                localStorage.setItem('percentage', JSON.stringify(percentage))
            }

            if (sessionDetails?.sessionCutoffTime && Date.now() <= sessionDetails?.sessionCutoffTime) {
                isSessionExpired = true
            }

            if (!isSessionExpired) {
                try {
                    var productDetails = document.getElementsByClassName('product-body-container-inner')
                    productDetails = productDetails[0]
                    var productPriceDiv = productDetails?.querySelector('div.product-price')
                    var price = productDetails?.querySelector('span.current-price')
                    var sizeSelect = productDetails?.querySelector('select.product-variation')
                    const spanElement = document.createElement('span')

                    // try {
                    //     console.log('price', price)
                    //     console.log('productDetails', productDetails)
                    //     productPriceDiv.style.display = 'none'

                    //     const addToCartDiv = productDetails.querySelector('.addtocart-wrapper').querySelector('.col20.flex.add-to-cart-inner')
                    //     console.log('addToCartDiv', addToCartDiv)
                    //     const clickLogin = () => {
                    //         // window.location.href = `https://${window.location.hostname}/signin?backTo=%2F${routeURL}%2F${subRoute}`
                    //         window.location.href = `https://${window.location.hostname}/safety-jackets-r-m`
                    //     };
                    //     addToCartDiv.firstElementChild.style.display = 'none'
                    //     addToCartDiv.children[1].innerHTML = ''
                    //     const loginLink = document.createElement('a')
                    //     loginLink.className = 'primaryColor-bg2 add-to-cart t-center col20'
                    //     loginLink.textContent = 'Login'
                    //     loginLink.onclick = clickLogin

                    //     addToCartDiv.children[1].appendChild(loginLink)
                    // }
                    // catch (e) {
                    //     console.log('e', e)
                    // }

                    if (sizeSelect) {
                        sizeSelect.addEventListener('change', (event) => {
                            try {
                                productDetails = document.getElementsByClassName('product-body-container-inner')
                                price = productDetails[0]?.querySelector('span[data-role="currentPrice2"]')
                                const selectedValue = event.target.value
                                if (selectedProductData?.combinations?.length) {
                                    let data = selectedProductData?.combinations?.filter((v) => v?.name === selectedValue)
                                    if (data?.length) {
                                        price.innerHTML = `$${data[0]?.price}`
                                    }
                                    // console.log('data', data)
                                }
                                // console.log(`Selected size: ${selectedValue}`, price)
                            }
                            catch (e) {
                                console.log('e', e)
                            }
                        })
                    }


                    // Set the class and data-role attributes
                    spanElement.className = 'current-price'
                    spanElement.setAttribute('data-role', 'currentPrice2')
                    if (price) {
                        price.style.display = 'none'
                    }

                    // console.log('selectedProduct', selectedProduct)

                    if (isPlus) {
                        if (selectedProductData?.price) {
                            spanElement.innerHTML = `$${((selectedProductData?.price + (selectedProductData?.price * percentage)).toFixed(2))}`
                            productPriceDiv.appendChild(spanElement)
                            selectedProductData.combinations = selectedProductData?.combinations?.map((v) => {
                                return {
                                    ...v,
                                    price: parseFloat((v?.price + (v?.price * percentage) || v?.price).toFixed(2))
                                }
                            })
                        }
                        else {
                            let p = parseFloat(parseFloat(price?.innerHTML?.split('$')?.slice(-1,)[0]).toFixed(2))
                            price.innerHTML = `$${(p + (p * percentage)).toFixed(2)}`
                        }

                        let data = await updateProduct(selectedProductData)
                        selectedProductData = { ...selectedProductData, id: data?.id }
                    }
                    else {
                        if (selectedProductData?.price) {
                            spanElement.innerHTML = `$${((selectedProductData?.price - (selectedProductData?.price * percentage)).toFixed(2))}`
                            productPriceDiv.appendChild(spanElement)
                            selectedProductData.combinations = selectedProductData?.combinations?.map((v) => {
                                return {
                                    ...v,
                                    price: parseFloat((v?.price - (v?.price * percentage) || v?.price).toFixed(2))
                                }
                            })
                        }
                        else {
                            let p = parseFloat(parseFloat(price?.innerHTML?.split('$')?.slice(-1,)[0]).toFixed(2))
                            price.innerHTML = `$${(p - (p * percentage)).toFixed(2)}`
                        }
                    }
                }
                catch (e) {
                    console.log('e', e)
                }
            }


        }
        else if (category && category?.id && groupName?.length) {
            // let data = await sendRequest(`${apiUrl}/${productRoute}`, 'GET', null, [{ category_id: category?.id }, { limit: 50 }])

            // console.log('data', data)
            // let items = data?.items?.filter((v) => !v?.url?.toLowerCase()?.includes('plus'))
            // itemIds = data?.items?.filter((v) => v?.url?.toLowerCase()?.includes(groupName))?.map((v) => v?.id)
            // console.log('items', items)
            // console.log('itemIds', itemIds)

            // let arr = []

            // for (var v of items) {
            //     for (var y of v?.variants) {
            //         if (y?.price) {
            //             y.price = calculateIncreasedPrice(y?.price * 1.1, 10)
            //         }
            //     }
            //     console.log('v', v)
            //     v.url = `${v?.url}-${groupName}`
            //     arr.push(sendRequest(`${apiUrl}/${productRoute}`, 'POST', v, [{ update_existing_product_by_url: true }]))
            // }

            // let promise = await Promise.allSettled(arr)
            // console.log('promise', promise)
            // const productLink = document.querySelectorAll('div[data-type="StoreWidget"]')
            // let parentDiv = productLink[0]?.children?.[0]?.children?.[2]

            // if (parentDiv?.children?.length) {
            //     // console.log('if')
            //     handleNewChild(parentDiv.children?.[0])
            // }
            // else {
            //     const observer = new MutationObserver(mutations => {
            //         mutations.forEach(mutation => {
            //             mutation.addedNodes.forEach(node => {
            //                 // Check if the added node is an element
            //                 if (node.nodeType === 1) { // Node.ELEMENT_NODE
            //                     handleNewChild(node)
            //                 }
            //             })
            //         })
            //     })

            //     observer.observe(parentDiv, { childList: true })
            // }
        }
        if (savedEmail) {
            let data = await sendRequest(`${apiUrl}/${memberRoute}`, 'GET', null, [{ email: savedEmail }])

            // console.log('user', data)

            if (data?.groups?.length) {
                let groups = data?.groups
                let id = Math.max(...groups)

                let idData = await sendRequest(`${apiUrl}/${groupRoute}/${id}`, 'GET')

                if (idData?.name && idData?.name?.toLowerCase()?.includes('plus')) {
                    localStorage.setItem('plus', JSON.stringify(true))
                    localStorage.setItem('groupName', idData?.name?.toLowerCase()?.replace(/ /g, '-'))
                }
                else {
                    localStorage.setItem('plus', JSON.stringify(false))
                    localStorage.removeItem('groupName')
                }
            }
        }
    }
    catch (e) {
        // console.log('e', e)
    }
})