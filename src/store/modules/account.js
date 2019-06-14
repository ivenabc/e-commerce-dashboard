import account from '@/api/account'
import { setToken } from '@/utils/token';
import { addTokenToHeader } from '@/utils/fetch'

const actions = {
    async login({commit}, payload) {
        const response = await account.login(payload)  
        await setToken(response.token)
        addTokenToHeader(response.token)
        commit("SET_USER_DATA", response)
        return response
    }
}

const state = {
    user: {},
}

const mutations ={
    ["SET_USER_DATA"](state, data) {
        state.user = data
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}