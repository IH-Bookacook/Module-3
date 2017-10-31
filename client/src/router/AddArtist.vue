<template>
  <div>
    <b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
    </b-notification>
    <form @submit.prevent="addArtist()">
      <p>Ajouter un Artist</p>
      <b-field label="Nom de artist">
        <b-input v-model="name"></b-input>
      </b-field>
      <button class="button is-primary">Créer artist</button>
    </form>
  </div>
</template>
<script>
import { createArtist } from '@/api/artist'

export default {
  data() {
    return {
      name:"",
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
