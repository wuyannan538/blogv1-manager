<template>
  <div class="container">
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button type="button" @click="login">login</button>
  </div>
</template>

<script>
import APIService from '../../service/service'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {

  },
  methods: {
    async login () {
      let res = await APIService.login({
        username: this.username,
        password: this.password
      })
      if (res.code === 200) {
        this.$router.push({name: 'home'})
      }
    }
  }
}
</script>

<style scope>

</style>
