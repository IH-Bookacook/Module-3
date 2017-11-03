<template>
  <div>
      <h1>Additions récentes...</h1>
      <ul class="container">
          <li v-for="artist in artists" :key="artist._id" >
              <artist-card :artist="artist"></artist-card>    
          </li>
      </ul>
     </div>
</template>

<script>
import { getArtists } from "@/api/artist";
import ArtistCard from "@/components/ArtistCard";

export default {
  components: {
    ArtistCard
  },
  data() {
    return {
      artists: []
    };
  },
  methods: {},
  created() {
    getArtists({ num: 20, sort: "name", order: "asc" }).then(
      artists => (this.artists = artists)
    );
  }
};
</script>

<style>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
