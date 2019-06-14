import { post } from '@/utils/fetch'

const login = (data) => {
    return post('/login', data)
}

export default {
    login,
} 