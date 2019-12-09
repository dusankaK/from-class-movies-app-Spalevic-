<template>
  <div id="app" class="d-flex flex-column h-100">
    <Header />

    <main role="main" class="flex-shrink-0">

    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'


export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
