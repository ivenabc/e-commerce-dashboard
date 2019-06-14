
const header = new Headers();


export const addTokenToHeader = (token) => header.append("Authorization", `Bearer ${token}`)


export const post = (url, data) => {
    return fetch(url, {
        body: data,
        cache: 'no-cache',
        // credentials: 'include',
        headers: header,
        method: 'POST',
        // mode: 'cors',
        // redirect: 'follow',
        referrer: 'no-referrer',
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(response.status)
        }

    })
}

export const get = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        // credentials: 'include',
        headers: header,
        method: 'GET',
        // mode: 'cors',
        // redirect: 'follow',
        referrer: 'no-referrer',
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(response.status)
        }

    })
}