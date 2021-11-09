import axios from 'axios'

export default {
    async fetchShows() {
        try {
            const response = await axios.get('https://api.tvmaze.com/shows')
            return response.data
        } catch {
            const message = "Could not load TV Shows"
            throw message
        }
    }
}