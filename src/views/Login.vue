<template>
  <div class="container mt-5">
    <form @submit.prevent="submit">
      <div class="imgcontainer">
        <img
            src="https://masterstart.com/images/student.svg?id=3949adc398005d8f83a9"
            alt="Avatar"
            class="avatar"
        />
      </div>
      <div class="container">
        <label for="email">
          <b>Email</b>
        </label>
        <input type="email" 
              class="form-control" 
              placeholder="Enter email" 
              name="email" required
              v-model="email" />
        <label for="psw">
          <b>Password</b>
        </label>
        <input 
          class="form-control" 
          type="password" 
          placeholder="Enter Password" 
          name="psw" required 
          v-model="password"/>
        <button class="btn btn-primary mt-1" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
       email: '',
       password: '' 
    }
  },

  methods: {
    ...mapActions({
      login: 'login'
    }), // uvek map actions pri vrhu
    submit() {
      this.login({
        email: this.email,
        password: this.password
      }).then(()=> {
        this.$router.push({
          name: 'movies'
        })
      })
    }
  }
}
</script>

<style>
.avatar {
    width: 100px;
    width: 100px;
}
</style>