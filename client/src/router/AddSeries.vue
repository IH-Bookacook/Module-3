<template>
<div>
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="AddSeries()">

    <p>Ajouter un éditeur</p>

    <b-field label="Nom de la series">
      <b-input v-model="name"></b-input>
      <b-input v-model="profile"></b-input>
    </b-field>
    <button class="button is-primary">Créer éditeur</button>
  </form>
</div>
</template>

<script>
import { createPublisher } from '@/api/serie'

export default {
  data() {
    return {
      name: "",
      error: null
    };
  },
  methods: {
    AddSeries() {
      this.error = null;
      createSerie({
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
