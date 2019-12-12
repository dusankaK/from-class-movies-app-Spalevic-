import Vue from 'vue'
import Vuex from 'vuex'
import {MoviesStore} from './MoviesStore'
import {AuthStore} from './AuthStore'



Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    AuthStore,
    MoviesStore
  },
})

export default store
