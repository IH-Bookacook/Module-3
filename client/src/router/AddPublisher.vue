<template>
<div>
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addPublisher()">

    <p>Ajouter un publisher</p>

    <b-field label="Nom de Publisher">
      <b-input v-model="name"></b-input>
    </b-field>
    <button class="button is-primary">Créer publisher</button>
  </form>
</div>
</template>

<script>
import { createPublisher } from '@/api/publisher'

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
