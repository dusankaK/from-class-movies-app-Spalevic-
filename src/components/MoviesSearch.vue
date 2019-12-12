<template>
  <div> 
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" 
               type="text" 
               placeholder="Search" 
               aria-label="Search"
               @input="setSearchTerm({term: $event.target.value})">
        <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
      </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
          setSearchTerm: 'setSearchTerm'
        })

        //setSearchTerm(term) {
       //     this.$store.commit('setSearchTerm', { term })
        //}
    }
}
</script>

<style>

</style>