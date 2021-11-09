import { FETCH_ALL_TV_SHOWS } from './action.types.js'
import { SET_TV_SHOWS } from './mutation.types.js'

import showsService from '../services.js'

export default {
    async [FETCH_ALL_TV_SHOWS]({ commit }) {
        const shows = await showsService.fetchShows()
        commit(SET_TV_SHOWS, shows)
    }
}