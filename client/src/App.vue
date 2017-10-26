<template>
  <div id="app">

    <img src="./assets/img1.jpg">
    <router-view/>

   <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>


        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/dashboard" class="navbar-item ">
            Dashboard
          </router-link>
          <router-link v-if="!$root.user" to="/login" class="navbar-item ">
            Login
          </router-link>
          <router-link v-if="!$root.user" to="/signup" class="navbar-item ">
            Signup
          </router-link>
          <a class="navbar-item" @click.prevent="logout" v-if="$root.user" href="#">
            Logout
          </a>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
>>>>>>> 8e02593dfb08b79fd344fe4b4e0d7e7a6590572d
  </div>
</template>

<script>
import { logout } from '@/api/auth'
export default {
  name: 'app',
  methods: {
    logout () {
      logout(this.$root)
      this.$router.push('/')
    }
  }
}
</script>
