
// getToken get user login token
export const getToken = () => localStorage.getItem('token')

// removeToken remove user login token 
export const removeToken = () => localStorage.removeItem('token')

// setToken set user token 
export const setToken = (token) => localStorage.setItem('token', token)
