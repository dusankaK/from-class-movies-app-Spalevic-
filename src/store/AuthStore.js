import { authService } from './../services/AuthService'

export const AuthStore = {
    state: {
        token: localStorage.getItem('token'),
        errors: null
    },

    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setErrors(state, errors) {
            state.errors = errors
        }
    },


    actions: {
        async login(context, { email, password }) {
            try{
                const response = await authService.login(email, password)
                context.commit('setToken', response.data.token)
                context.commit('setErrors', null)
                localStorage.setItem('token', response.data.token)
                return response
            } catch(exception) {
                context.commit('setErrors', exception)
            }
        },
        logout(context) {
            context.commit('setToken', null)
            localStorage.removeItem('token')
        }

    },

    getters: {
        isUserAuthenticated(state) {
            return !!state.token //ako je token definisan dobicemo true, ako nije dobicemo false
        }
    }
}
//store ne zna za rutiranje, nikako da kaplujemo router i store 