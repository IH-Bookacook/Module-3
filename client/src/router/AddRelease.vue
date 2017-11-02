<template>
<div>
  <b-notification v-if="error" type="is-danger" has-icon>
    {{ error.message }}
  </b-notification>
  <form @submit.prevent="addRelease()">

    <p>Ajouter une release</p>

    <b-field label="Name of BD">
      <b-input v-model="postData.title"></b-input>
    </b-field>

    <b-field label="Release BD of Year">
      <b-input type="number" v-model="postData.releaseYear"></b-input>
    </b-field>
    <b-field label="Release BD of Country">
      <b-input v-model="postData.releaseCountry"></b-input>
    </b-field>
    <b-field label="BD of Language">
      <b-input v-model="postData.releaseLanguage"></b-input>
    </b-field>
    <b-field label="nom de la publisher ">
    <b-autocomplete
    v-model="publisherName"
    keep-first
    :data="filteredPublishers"
    field="name"
    @select="publisher => publisher ? postData.publisher = [publisher._id] : []">
    <template slot="empty">
      pas de publisher trouvée.
      <router-link to="/add-publisher" class="button is-primary">
        En créer une
    </router-link>
  </template>
  </b-autocomplete>
  </b-field>
  <b-field label="nom de artist ">
  <b-autocomplete
  v-model="artistName"
  keep-first
  :data="filteredArtists"
  field="name"
  @select="artist => artist ? postData.artists = [artist._id] : []">
  <template slot="empty">
    pas de artist trouvée.
    <router-link to="/add-artist" class="button is-primary">
      En créer une
  </router-link>
</template>
</b-autocomplete>
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
import { getAllPublishers } from '@/api/publisher';
import { getAllArtists } from '@/api/artist';
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
      artists: [],
      }
    };
  },
  mounted() {
  getAllPublishers().then(publishers => this.allPublishers = publishers)
  getAllArtists().then(artists => this.allArtists = artists)
},
computed: {
  filteredPublishers() {
   return this.allPublishers.filter(publisher => {
     return publisher.name.toLowerCase()
     .indexOf(this.publisherName.toLowerCase()) >= 0
   })
 },
 filteredArtists() {
   return this.allArtists.filter(artist => {
     return artist.name.toLowerCase()
     .indexOf(this.artistName.toLowerCase()) >= 0
   })
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
