<template>
  <div class="container">
      <h1 class="mt-4">Movies</h1>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{movie.title}}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './../store'

export default {
  computed: {
    //movies() {
      //return store.getters.filteredMovies
    //}
    ...mapGetters({
      movies: 'filteredMovies'
    })
    //...mapGetters(['filteredMovies'])
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchMovies').then(()=>{
      next()
    })
  }
  //kad god imamo beforeRouteEnter importujemo direktno store 
}
</script>

<style>

</style>