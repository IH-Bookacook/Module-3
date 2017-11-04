<template>
<div class="form">
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addPublisher()">
    <br>
    <h1 style="font-family:smilingCat;font-size:16px;color:#e01111"><b>AJOUTER UN EDITEUR:</b></h1>
    <br>

    <b-field label="Nom de l'éditeur">
      <b-input v-model="name"></b-input>
    </b-field>


    <b-field label="Profil de l'éditeur">
      <b-input v-model="profile"></b-input>
    </b-field> 

    <button class="button is-primary">Ajouter l'éditeur</button>
  </form>
</div>
</template>

<script>
import { createPublisher } from "@/api/publisher";

export default {
  data() {
    return {
      name: "",
      error: null
    };
  },
  methods: {
    addPublisher() {
      this.error = null;
      createPublisher({
        name: this.name
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
