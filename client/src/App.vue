<template>
  <div id="app">


   <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="./assets/img1.jpg">
        </a>


        <div class="navbar-burger burger" data-target="navMenuTransparentExample">

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
  </div>
</template>

<script>
import { logout } from "@/api/auth";
export default {
  name: "app",
  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
</script>
