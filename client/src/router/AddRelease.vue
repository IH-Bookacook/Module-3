<template>
<div class="form">
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addRelease()">

     <br>
      <h1 style="font-family:smilingCat;font-size:16px;color:#e01111"><b>AJOUTER UNE EDITION:</b></h1>
      <br>

    <b-field label="Nom de la BD">
      <b-input v-model="postData.title"></b-input>
    </b-field>

    <b-field label="Date de parution de l'édition">
      <b-input type="number" v-model="postData.releaseYear"></b-input>
    </b-field>
    <b-field label="Pays de l'édition">
      <b-input v-model="postData.releaseCountry"></b-input>
    </b-field>
    <b-field label="Langue de l'édition">
      <b-input v-model="postData.releaseLanguage"></b-input>
    </b-field>
    <b-field label="Nom de l'éditeur">
    <b-autocomplete
    v-model="publisherName"
    keep-first
    :data="filteredPublishers"
    field="name"
    @select="publisher => publisher ? postData.publisher = [publisher._id] : []">
    <template slot="empty">
      Editeur inconnu
      <router-link to="/add-publisher" class="button is-primary">
        Le créer
    </router-link>
  </template>
  </b-autocomplete>
  </b-field>
  <b-field label="Nom de l'artiste">
  <b-autocomplete
  v-model="artistName"
  keep-first
  :data="filteredArtists"
  field="name"
  @select="artist => artist ? postData.artists = [artist._id] : []">
  <template slot="empty">
    Artiste inconnu
    <router-link to="/add-artist" class="button is-primary">
      Le créer
  </router-link>
</template>
</b-autocomplete>
</b-field>

    <!--<b-field label="Image of BD">
       <b-input v-model="">
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

    <button class="button is-primary">Ajouter l'édition</button>
  </form>
</div>
</template>

<script>
import { createRelease } from "@/api/release";
import { getAllPublishers } from "@/api/publisher";
import { getAllArtists } from "@/api/artist";
export default {
  data() {
    return {
      publisherName: "",
      artistName: "",
      error: null,
      allPublishers: [],
      allArtists: [],
      postData: {
        title: "",
        releaseYear: null,
        releaseCountry: "",
        releaseLanguage: "",
        publishers: [],
        artists: []
      }
    };
  },
  mounted() {
    getAllPublishers().then(publishers => (this.allPublishers = publishers));
    getAllArtists().then(artists => (this.allArtists = artists));
  },
  computed: {
    filteredPublishers() {
      return this.allPublishers.filter(publisher => {
        return (
          publisher.name
            .toLowerCase()
            .indexOf(this.publisherName.toLowerCase()) >= 0
        );
      });
    },
    filteredArtists() {
      return this.allArtists.filter(artist => {
        return (
          artist.name.toLowerCase().indexOf(this.artistName.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    addRelease() {
      this.error = null;
      createRelease(this.postData)
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

<style>
.form {
  margin-left: 30vh;
  margin-right: 30vh;
}
</style>
