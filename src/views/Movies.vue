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
import store from './../store'

export default {
  computed: {
    movies() {
      return store.state.movies
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchMovies').then(()=>{
      next()
    })
  }
}
</script>

<style>

</style>