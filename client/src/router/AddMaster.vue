<template>
  <div>
    <b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
    </b-notification>
    <form @submit.prevent="addMaster()">
      <p>Ajouter un Master</p>
      <b-field label="name of BD">
        <b-input v-model="title"></b-input>
      </b-field>
      <b-field label="name of BD">
        <b-input v-model="title"></b-input>
      </b-field>
      <b-field label="Year first Published">
        <b-input v-model="yearFirstPublished"></b-input>
      </b-field>
      <b-field label="Original Language">
        <b-input v-model="originalLanguage"></b-input>
      </b-field>
      <b-field label="Country">
        <b-input v-model="country"></b-input>
      </b-field>
      <b-field label="Genre">
        <b-input v-model="genre"></b-input>
      </b-field>
      <b-field label="Awards">
        <b-input v-model="awards"></b-input>
      </b-field>
      <button class="button is-primary">addMaster</button>
    </form>

  </div>
</template>

<script>
import {
  createMaster
} from '@/api/master';
export default {
  data() {
    return {
      title:"",
      yearFirstPublished:"",
      originalLanguage:"",
      country:"",
      genre:"",
      awards:"",
      error: null
    };
  },
  methods: {
    addMaster() {
      this.error = null;
      createMaster({
        title: this.title,
        yearFirstPublished: this.yearFirstPublished,
        originalLanguage: this.originalLanguage,
        country: this.country,
        genre: this.genre,
        awards: this.awards,
      })
      .then(() => {
        this.$router.push("/");
      })
      .catch(err => {
        this.error = err.response.data.error;
        console.error("Upload error", err);
      });
    }
  }
};
</script>
