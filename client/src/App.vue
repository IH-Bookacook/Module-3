<template>
  <div id="app">


   <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="./assets/img1.jpg">
        </a>
        <div class="navbar-menu">
          <div class="navbar-start">

            <router-link v-if="!$root.user" to="/" class="navbar-item ">
              Home
            </router-link>
          </div>
        </div>
        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuTransparentExample" class="navbar-menu">
          <div class="navbar-end">


          <div class="navbar-item has-dropdown is-hoverable">

            <div class="navbar-link">
              Explore
            </div>
            <div id="exploreDropdown" class="navbar-dropdown is-boxed">
              <!-- <a class="navbar-item " href="BD.vue"> -->
                <p>
                  <router-link v-if="!$root.user" to="/bd" class="navbar-item">
                  <strong>BD</strong>
                  </router-link>

                  <router-link v-if="!$root.user" to="/Authors" class="navbar-item">
                  <strong>Author</strong>
                  </router-link>

                  <router-link v-if="!$root.user" to="/Editors" class="navbar-item">
                  <strong>Editors</strong>
                  </router-link>
                </p>
              </a>

            </div>
          </div>

          <router-link v-if="!$root.user" to="/uploadBD" class="navbar-item ">
            uploadBD
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
