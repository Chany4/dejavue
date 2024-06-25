import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
  state: {
    cars: null,
    gamingConsoles: null,
    friends: null,
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
      // let fetchInfo = await fetch('https://chany4.github.io/dejaVue-API/data/data.json', info) --> what does that do
      // let fetchInfo = await axios.get('https://chany4.github.io/dejaVue-API/data/data.json')
      let data = await fetchInfo.json()
      // method:'post'--> send put--> edit 
      // let data = await api.json()
      console.log(data);
      let {cars,gaming_consoles,friends} = data
      commit('setCars',cars)
      commit('setGamingConsoles',gaming_consoles)
      commit('setFriends',friends)
    }
  },
  modules: {
  }
})
