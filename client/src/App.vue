<template>
  <div id="app" style="background-color:white; height: 100vh">

   <nav class="navbar is-transparent">

      <div class="navbar-brand" >

        <a class="navbar-item" href="/" >
          <img src="./assets/img2bd.png">
        </a>
        <div class="navbar-menu">

          <div class="navbar-start">

            <router-link v-if="!$root.user" to="/" class="navbar-item ">

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

          <div class="navbar-end" >


          <div class="navbar-item has-dropdown is-hoverable">

            <div class="navbar-link">
              Explore
            </div>
            <div id="exploreDropdown" class="navbar-dropdown is-boxed">
              <!-- <a class="navbar-item " href="Master.vue"> -->
                <p>
                  <router-link v-if="!$root.user" to="/bd" class="navbar-item">
                  <strong>BDs</strong>
                  </router-link>

                  <router-link v-if="!$root.user" to="/Artist" class="navbar-item">
                  <strong>Auteurs</strong>
                  </router-link>

                  <router-link v-if="!$root.user" to="/Publisher" class="navbar-item">
                  <strong>Editeurs</strong>
                  </router-link>
                </p>
              </a>

            </div>
          </div>



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

<div class="bkgimg">

  <div class="container">

    <router-view></router-view>

  </div>

</div>


    </section>

    <footer id="bg-img">

    </footer>


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
<style>
#contain {
  font-style: oblique;
  font-family: fantasy;
  font-weight: bold;
  color: black;
  font-size: 20px;
}

#bg-img {
  background-color: black;
  height: 15vh;
  width: 100%;
  /*background:url(./assets/bgimg1.png);*/
  position: fixed;
  bottom: 0;
}

#navMenuTransparentExample{
  font-style: oblique;
  font-family: fantasy;
  font-weight: bold;
  color: white;
  font-size: 20px;

}
.container {
position: relative;
margin-top: 20px;
  height: 400px;
  width: 600px;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgrey;
  border-radius: 20px;
  opacity: 0.8;
  background-color: white
}
.navbaris-transparent {

}

.bkgimg{
  background:url(./assets/bgimg1.png);
}
.navbar-item img {
  max-height: 4rem;
}

#app form .label {
  font-style: oblique;
  font-family: fantasy;
  font-weight: bold;
  color: black;
  font-size: 20px;
}
</style>
