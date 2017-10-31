<template>
<div>
<b-notification v-if="error" type="is-danger" type="is-danger" has-icon>
    {{ error.message }}
</b-notification>
<form @submit.prevent="uploadBD">

<p>Ajouter une edition</p>

        <b-field label="Name of BD">
            <b-input v-model="title"></b-input>
        </b-field>

        <b-field label="Release BD of Year">
            <b-input v-model="releaseYear"></b-input>
        </b-field>
        <b-field label="Release BD of Country">
            <b-input v-model="releaseCountry"></b-input>
        </b-field>
        <b-field label="BD of Language">
            <b-input v-model="releaseLanguage"></b-input>
        </b-field>
        <b-field label="Publisher">
            <b-input v-model="releasePublisher"></b-input>
        </b-field>
        <b-field label="Image of BD">
                      <!-- <b-input v-model="">
                        <template>
              <b-field>
                  <b-upload v-model="files">
                      <a class="button is-primary">
                          <b-icon icon="file_upload"></b-icon>
                          <span>Click to upload</span>
                      </a>
                  </b-upload>
                  <div v-if="files && files.length">
                      <span class="file-name">
                          {{ files[0].name }}
                      </span>
                  </div>
              </b-field>
          </template> -->

</b-input>
</b-field>
<button class="button is-primary" @click.prevent="uploadBD">uploadBD</button>
</form>
</div>

</template>

<script>
import { uploadBD } from "@/api/auth";
  export default {
    data() {
      return {
          title:"",
          releaseYear:"",
          releaseCountry:"",
          releaseLanguage:"",
          releasePublisher:"",
          error: null
      };
    },
  method: {
    uploadBD() {
      this.error = null;
      uploadBD({
        title: this.title,
        releaseYear: this.releaseYear,
        releaseCountry: this.releaseCountry,
        releaseLanguage: this.releaseLanguage,
        releasePublisher: this.releasePublisher
      })
      .then(() => {
        this.$router.push("/login");
      })
      .catch(err => {
        this.error = err.response.data.error;
        console.error(" Upload err", err);
      });
    }
  }
};
</script>
