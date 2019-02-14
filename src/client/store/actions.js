import request from "axios"

const actions = {
    loadUsername: ({
        commit,
        state
    }) => {
        request.get('/user/getusername').then(res => {
            commit('UPDATE_USER_NAME', {
                username: res.data.name
            })
        }).catch(console.log)
    }
}

export default actions