
// Import the `mount()` method from Vue Test Utils
import { createLocalVue, mount } from '@vue/test-utils';

import TvShowRow from '../components/TvShowRow.vue'

import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(VueRouter)
const router = new VueRouter()

const createWrapper = (props) => {
  return mount(TvShowRow, {
    localVue,
    router,
    propsData: {
      showName: 'Rick & Morty',
      showImage: 'image.png',
      showRating: 8,
      showRanking: 20,
      ...props
    }
  })
}

test('renders the data correctly', () => {
  const wrapper = createWrapper()

  const name = wrapper.find('[data-test="show-name"]')
  const image = wrapper.find('[data-test="show-image"]')
  const rating = wrapper.find('[data-test="show-rating"]')
  const ranking = wrapper.find('[data-test="show-ranking"]')

  expect(name.text()).toContain('Rick & Morty')
  expect(image.attributes('src')).toEqual('image.png')
  expect(rating.text()).toContain(8)
  expect(ranking.text()).toContain(20)
})