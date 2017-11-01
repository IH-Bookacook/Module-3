<template>
<div>
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addSeries()">

    <p>Ajouter un series</p>

    <b-field label="Nom de la series">
      <b-input v-model="name"></b-input>
      </b-field>
      <br>
      <b-field label="Profile of series">
      <b-input v-model="profile"></b-input>
    </b-field>
    <button class="button is-primary">Créer series</button>
  </form>
</div>
</template>

<script>
import { createSeries } from '@/api/serie'

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
