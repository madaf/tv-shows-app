import { SET_TV_SHOWS } from './mutation.types.js'

export default {
    async [SET_TV_SHOWS](state, shows) {
        state.allTvShows = shows
    }
}