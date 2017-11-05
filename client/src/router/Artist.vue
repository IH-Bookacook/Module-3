<template>
  <div>
    <br>
      <h1 style="margin-left:20px;color:#e01111"><b>Fiche détaillée :</b></h1>
      <artist-card :artist="artist"></artist-card>    
  </div>
</template>

<script>
import { getArtist } from "@/api/artist";
import ArtistCard from "@/components/ArtistCard";

export default {
  components: {
    ArtistCard
  },
  data() {
    return {
      artist: []
    };
  },
  methods: {},
  created() {
    getArtist(this.$route.params.id).then(artist => (this.artist = artist));
  }
};
</script>

<style>

</style>