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
let apiToken = `w7e7ae734df7c4d56b009d7c6e530befc`

let routeURL = window.location.pathname?.slice(1,)?.split('/')
let subRoute = routeURL?.[1]
routeURL = routeURL?.[0]

const savedEmail = localStorage.getItem('email')
const isPlus = localStorage.getItem('plus')
var groupName = localStorage.getItem('groupName')
var isSessionExpired = false

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

console.log('category', category)

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

const updateProducts = async (e) => {
    if (category && category?.id && groupName?.length) {
        let data = await sendRequest(`${apiUrl}/${productRoute}`, 'GET', null, [{ category_id: category?.id }, { limit: 50 }])

        // console.log('data', data)
        let items = data?.items?.filter((v) => !v?.url?.toLowerCase()?.includes('plus'))
        let itemIds = data?.items?.filter((v) => v?.url?.toLowerCase()?.includes(groupName))?.map((v) => v?.id)
        // console.log('items', items)
        // console.log('itemIds', itemIds)

        e.storeItems = itemIds

        let arrPromise = []

        if (itemIds?.length) {

            for (var v of itemIds) {
                arrPromise.push(new Promise((resolve, reject) => {
                    WebPlatform.makeClientWebsiteRequest({
                        action: "getStoreProduct",
                        data: {
                            id: v
                        },
                        onOk: (e) => resolve(e?.data)
                    })
                }))
            }
        }

        let promise = await Promise.allSettled(arrPromise)
        promise = promise?.map((v) => v?.value)
        // console.log('arrPromise', promise)


        let arr = []

        for (var v of items) {
            for (var y of v?.variants) {
                if (y?.price) {
                    y.price = calculateIncreasedPrice(y?.price * 1.1, 10)
                }
            }
            // console.log('v', v)
            v.url = `${v?.url}-${groupName}`
            arr.push(sendRequest(`${apiUrl}/${productRoute}`, 'POST', v, [{ update_existing_product_by_url: true }]))
        }

        // let promise = await Promise.allSettled(arr)
        Promise.allSettled(arr)
            .then(() => WebPlatform.Widgets.Store(e))
        // console.log('promise', promise)
    }
}


if (isPlus && JSON.parse(isPlus)) {
    document.addEventListener('DOMContentLoaded', async function () {
        try {
            const savedEmail = localStorage.getItem('email')
            if (savedEmail) {
                let data = await sendRequest(`${apiUrl}/${memberRoute}`, 'GET', null, [{ email: savedEmail }])

                // console.log('user', data)

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
            if (subRoute?.length) {
                console.log('subRoute', subRoute)
                var groupName = localStorage.getItem('groupName')
                var sessionDetails = JSON.parse(localStorage.getItem('session-details')) || {}
                // console.log('sessionDetails', sessionDetails)

                if (sessionDetails?.sessionCutoffTime && Date.now() <= sessionDetails?.sessionCutoffTime) {
                    isSessionExpired = true
                }

                if (!isSessionExpired && groupName && !window.location.pathname?.includes(groupName)) {
                    window.location.href = `${routeURL}/${subRoute}-${groupName}`
                }
                // let data = await sendRequest(`${apiUrl}/${productRoute}`, 'GET', null, [{ category_id: category?.id }, { url: subRoute }, { limit: 50 }])

                // console.log('data subroute', data)
                // let productDetails = document.getElementsByClassName('product-body-container-inner')
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

        }
        catch (e) {
            // console.log('e', e)
        }
    })
}