
// Import the `mount()` method from Vue Test Utils
import { createLocalVue, shallowMount } from '@vue/test-utils';

import TvShowsView from './TvShowsView.vue'

import {FETCH_ALL_TV_SHOWS} from '../store/action.types.js'

import VueRouter from 'vue-router'
import Vuex from 'vuex'

let allGenres
const mockedShows = [
    {
      id: 1,
      name: 'Stargate SG-1',
      image: {
          medium: 'stargate.png'
      },
      rating: {
          average: 9.8
      },
      genres: ['Science-Fiction']
    },
    {
      id: 2,
      name: 'Grimm',
      image: {
          medium: 'grimm.png'
      },
      rating: {
          average: 8
      },
      genres: ['Action']
    },
    {
      id: 3,
      name: 'NCIS',
      image: {
          medium: 'ncis.png'
      },
      rating: {
          average: 7
      },
      genres: ['Action']
    }
  ]

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()
const store = new Vuex.Store({
  actions: {
    [FETCH_ALL_TV_SHOWS]: jest.fn().mockImplementation(() => Promise.resolve)
  },
  getters: {
    tvShowsByRating: () => {
      return mockedShows
    },
    allGenres: () => allGenres
  },
})

const createWrapper = (props) => {
  return shallowMount(TvShowsView, {
    localVue,
    router,
    store,
    propsData: {
      ...props
    }
  })
}

test('shows only the TV Shows that have the selected genre', () => {
  const wrapper = createWrapper()

  wrapper.vm.selectedGenre = 'Action'

  expect(wrapper.vm.filteredShowsByGenre).toHaveLength(2)
})

test('shows only the searched TV Show', async () => {
  const wrapper = createWrapper()
  
  wrapper.vm.searchedInputValue = 'NCIS'

  const form = wrapper.find('[data-test="shows-form"]')

  await form.trigger("submit.prevent")
  
  expect(wrapper.vm.filteredShowsBySearch).toHaveLength(1)
  expect(wrapper.vm.filteredShowsBySearch[0].name).toEqual('NCIS')
})