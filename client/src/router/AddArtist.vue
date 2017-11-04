<template>
  <div class="form">
    <b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
    </b-notification>
    <form @submit.prevent="addArtist()">
      <br>
      <h1 style="font-family:smilingCat;font-size:16px;color:#e01111"><b>AJOUTER UN ARTISTE:</b></h1>
      <br>
      <b-field label="Nom de l'artiste">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Profil de l'artiste">
        <b-input v-model="profile"></b-input>
      </b-field>
      <button class="button is-primary">Ajouter l'artiste</button>
    </form>
  </div>
</template>
<script>
import { createArtist } from "@/api/artist";

export default {
  data() {
    return {
      name: "",
      error: null
    };
  },
  methods: {
    addArtist() {
      this.error = null;
      createArtist({
        name: this.name
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          console.error("Upload err", err);
          this.error = err.response.data.error;
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