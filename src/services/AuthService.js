import { HttpService } from './HttpService'

class AuthService extends HttpService {
    login(email, password) { //eslint-disable-line
        //return this.axios.post('/login', {
        //    email,
        //    password
        //})
        return new Promise((resolve) => resolve ({
            data: {
                token: 'my_token'
            }
        }))
    }
}

export const authService = new AuthService()