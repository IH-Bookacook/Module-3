<template>
  <div>
    <form @submit.prevent="login">
      <b-field label="Username">
            <b-input v-model="username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>

      <button class="button is-primary" @click.prevent="login">Login</button>
    </form>
  </div>
</template>


<script>
import { login } from "@/api/auth";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    login() {
      login(this.username, this.password, this.$root).then(data => {
        const redirect = decodeURIComponent(this.$route.query.redirect || "");
        this.$router.push(redirect || "/");
      });
    }
  }
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
}
</style>
