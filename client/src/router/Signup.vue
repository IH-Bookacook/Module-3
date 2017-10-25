
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
</template>

<script>
import { signup } from '@/api/auth'
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
