import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null,
    education: null,
    skills: null,
    workExp: null,
    projects: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setCars (state, payload) {
      state.cars = payload
    },
    setGamingConsoles (state, payload) {
      state.gamingConsoles = payload
    },
    setFriends (state, payload) {
      state.friends = payload
    },
  },
  actions: {
    async getData({commit}){
      let fetchInfo = await fetch('https://chany4.github.io/dejaVue-API/data/data.json')
      let data = await fetchInfo.json()
      let {cars,gamingConsoles,friends} = data
      commit('setCars',cars)
      commit('setGamingConsoles',gamingConsoles)
      commit('setFriends',friends)
    }
  },
  modules: {
  }
})
