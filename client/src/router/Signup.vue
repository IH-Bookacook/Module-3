<<<<<<< HEAD

<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-select
      label="Password"
      v-model="password"
      :rules="[v => !!v || 'password is required']"
      required
    ></v-select>

    <v-btn
      @click="submit"
      :disabled="!valid">
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
=======
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

        <b-field label="Password">
            <b-input
              type="password"
              required
              v-model="password"
              password-reveal
            >
            </b-input>
        </b-field>

        <button class="button is-primary">Signup</button>
      </form>
  </div>
>>>>>>> 8e02593dfb08b79fd344fe4b4e0d7e7a6590572d
</template>

<script>
import { signup } from '@/api/auth'
<<<<<<< HEAD
  export default {
    data: () => ({
      valid: true,
      username: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],

    methods: { submit () { if (this.$refs.form.validate()) { // Native form submission is not yet supported axios.post('/api/submit', { username: this.username, email: this.email, select: this.select, }) } }, clear () { this.$refs.form.reset() } } }
</script>
=======

export default {
  data () {
    return {
      username: '',
      password: '',
      name: '',
      error: null
    }
  },
  methods: {
    signup () {
      this.error = null
      signup({
        username: this.username,
        name: this.name,
        password: this.password
      }).then(() => {
        this.$router.push('/login')
      }).catch(err => {
        this.error = err.response.data.error
        console.error('Signup err', err)
      })
    }
  }
}
</script>

<style scoped>
  form {
    max-width: 400px;
    margin: auto;
  }
</style>
>>>>>>> 8e02593dfb08b79fd344fe4b4e0d7e7a6590572d
