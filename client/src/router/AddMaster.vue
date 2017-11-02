<template>
  <div>
    <b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
    </b-notification>
    <form @submit.prevent="addMaster()">
      <p>Ajouter un Master</p>
      <b-field label="name of BD">
        <b-input v-model="postData.title"></b-input>
      </b-field>
      <b-field label="Nom de la collection(Serie)">
        <b-autocomplete
          v-model="seriesName"
          keep-first
          :data="filteredSeries"
          field="name"
          @select="series => series ? postData.series = series._id : null">
          <template slot="empty">
            Pas de collection trouvée.
            <router-link to="/add-series" class="button is-primary">
              En créer une
            </router-link>
          </template>
        </b-autocomplete>
      </b-field>
      <b-field label="First year of Published">
      <b-input type="number" v-model="postData.yearFirstPublished"></b-input>
      </b-field>
        <b-field label="nom de la publisher ">
        <b-autocomplete
        v-model="publisherName"
        keep-first
        :data="filteredPublishers"
        field="name"
        @select="publisher => publisher ? postData.publishers = [publisher._id] : []">
        <template slot="empty">
          pas de publisher trouvée.
          <router-link to="/add-publisher" class="button is-primary">
            En créer une
        </router-link>
      </template>
      </b-autocomplete>
      </b-field>
      <b-field label="Original Language">
        <b-input v-model="postData.originalLanguage"></b-input>
      </b-field>

      <b-field label="nom de la artist ">
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

      <b-field label="Country">
        <b-input v-model="postData.country"></b-input>
      </b-field>
      <b-field label="Genre">
        <b-input v-model="postData.genre"></b-input>
      </b-field>
      <b-field label="Awards">
        <b-input v-model="postData.awards"></b-input>
      </b-field>
      <button class="button is-primary">Ajouter le master</button>
    </form>

  </div>
</template>

<script>
import {
  createMaster
} from '@/api/master';
import { getAllSeries } from '@/api/serie';
import { getAllPublishers } from '@/api/publisher';
import { getAllArtists } from '@/api/artist'

export default {
  data() {
    return {
      seriesName: "",
      error: null,
      allSeries: [],
      publisherName: "",
      allPublishers: [],
      artistName: "",
      allArtists: [],
      postData: {
        title: "",
        series: null,
        yearFirstPublished: null,
        publishers: [],
        artists: [],
        originalLanguage: "",
        country: "",
        genre: "",
        awards: ""
      }
    };
  },
  mounted() {
    getAllSeries().then(series => this.allSeries = series)
    getAllPublishers().then(publishers => this.allPublishers = publishers)
    getAllArtists().then(artists => this.allArtists = artists)
  },
  computed: {
    filteredSeries() {
      return this.allSeries.filter(series => {
        return series.name.toLowerCase()
          .indexOf(this.seriesName.toLowerCase()) >= 0
      })
    },
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
    addMaster() {
      this.error = null;
      createMaster(this.postData)
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
