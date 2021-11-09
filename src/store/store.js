import Vue from "vue"
import Vuex from "vuex"
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = () => {
    return {
        allTvShows: []
    }
}

const getters = {
    tvShowsByRating: (state) => { 
        const ratedTVShows = state.allTvShows.filter(show => show.rating.average)
       return ratedTVShows.sort((a, b) => (b.rating.average > a.rating.average) ? 1 : -1)
    },

    selectedShow: (state) => (selectedShow) => state.allTvShows.find(show => show.name === selectedShow),

    allGenres: (state) => {
        // get all the genres from all the tv shows and flatten them into one array
        const genres = state.allTvShows.map(show => show.genres).flat()
        // create new array with unique values
        return [...new Set(genres)]
    }
}

export const storeConfig = {
    state,
    actions,
    mutations,
    getters
}

export default new Vuex.Store(storeConfig)
