<template>
  <div>
    <b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
    </b-notification>
    <form @submit.prevent="signup">
      <b-field label="Username">
        <b-input v-model="username" required maxlength="30"></b-input>
      </b-field>

       <b-field label="Name">
        <b-input v-model="name" required maxlength="30"></b-input>
      </b-field>

      <b-field label="Email">
        <b-input v-model="email" required maxlength="30"></b-input>
      </b-field>

        <b-field label="Password">
            <b-input
              type="password"
              required
              v-model="password"
              password-reveal
            >
            </b-input>
        </b-field>

        <button class="button is-primary" @click.prevent="signup">Signup</button>
      </form>
  </div>
</template>

<script>
import { signup } from "@/api/auth";

export default {
  data() {
    return {
      username: "",
      password: "",
      name: "",
      email: "",
      error: null
    };
  },
  methods: {
    signup() {
      this.error = null;
      signup({
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => {
          this.error = err.response.data.error;
          console.error("Signup err", err);
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
