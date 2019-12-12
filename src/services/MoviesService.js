import { HttpService } from './HttpService'

class MoviesService extends HttpService {
    getAll(){
        return this.axios.get('/movies')
    }
}

export const moviesService = new MoviesService()