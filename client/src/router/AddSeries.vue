<template>
<div class="form">
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addSeries()">

    <br>
      <h1 style="font-family:smilingCat;font-size:16px;color:#e01111"><b>AJOUTER UNE SERIE:</b></h1>
      <br>

    <b-field label="Nom de la série">
      <b-input v-model="name"></b-input>
      </b-field>
      <br>
      <b-field label="Profil de la série">
      <b-input v-model="profile"></b-input>
    </b-field>
    <button class="button is-primary">Ajouter la série</button>
  </form>
</div>
</template>

<script>
import { createSeries } from "@/api/serie";

export default {
  data() {
    return {
      name: "",
      profile: "",
      error: null
    };
  },
  methods: {
    addSeries() {
      this.error = null;
      createSeries({
        name: this.name,
        profile: this.profile
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err.response.data.error;
          console.error("Upload err", err);
        });
    }
  }
};
</script>

<style>
.form {
  margin-left: 30vh;
  margin-right: 30vh;
}
</style>

