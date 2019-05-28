import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import store from '@/store/index'
import router from '@/router'

let wrapper: any
describe('Home.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Home, { store, router })
  })

  it('validate if api returned films quantity correct', async () => {
    await wrapper.vm.$store.dispatch('films/getFilms')

    expect(wrapper.vm.films.length).toBe(7)
  })
})
