<template>
<div>
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addRelease()">

    <p>Ajouter une release</p>

    <b-field label="Name of BD">
      <b-input v-model="title"></b-input>
    </b-field>

    <b-field label="Release BD of Year">
      <b-input type="number" v-model="releaseYear"></b-input>
    </b-field>
    <b-field label="Release BD of Country">
      <b-input v-model="releaseCountry"></b-input>
    </b-field>
    <b-field label="BD of Language">
      <b-input v-model="releaseLanguage"></b-input>
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

    <button class="button is-primary">addRelease</button>
  </form>
</div>
</template>

<script>
import {
  createRelease
} from '@/api/release';
export default {
  data() {
    return {
      title: "",
      releaseYear: null,
      releaseCountry: "",
      releaseLanguage: "",
      error: null
    };
  },
  methods: {
    addRelease() {
      this.error = null;
      createRelease({
          title: this.title,
          releaseYear: this.releaseYear,
          releaseCountry: this.releaseCountry,
          releaseLanguage: this.releaseLanguage,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err.response.data.error;
          console.error(" Upload err", err);
        });
    }
  }
};
</script>
