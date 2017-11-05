<template>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="getUrl(master.image)" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{master.title}}</p>
              </div>
    </div>

    <div class="content">
      <div class="info">
            <router-link  :to="`/artists/${master.credits[0].artist._id}`"><p><b>Auteur :</b> {{master.credits[0].artist.name}}</p></router-link>

            <p v-if="master.series"><b>Série :</b> {{master.series.name}}</p>
            <p v-if="master.publishers.length !==0"><b>Editeur :</b> {{master.publishers[0].name}}</p>
            <p v-if="master.yearFirstPublished"><b>Année de parution :</b> {{master.yearFirstPublished}}</p>
            <p v-if="master.originalLanguage"><b>Langue :</b> {{master.originalLanguage}}</p>
            <p v-if="master.country"><b>Pays :</b> {{master.country}}</p>
            <p v-if="master.genre"><b>Genre :</b> {{master.genre}}</p>
            <p v-if="master.awards.length !==0"><b>Récompenses :</b> {{master.awards}}</p>
            <p><b>Ajouté par :</b> {{master.addedBy.username}}</p>

      </div>
    </div>
  </div>
</div>

    
</template>

<script>
export default {
  props: ["master"],
  methods: {
    getUrl(filename) {
      return require("../assets/" + filename);
    }
  }
};
</script>

<style>
div {
  display: block;
}

.card {
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  width: 600px;
  margin-left: 20px;
}

.image {
  width: 185px;
  height: 278px;
  line-height: 0;
  overflow: hidden;
}

.info {
  width: 298px;
  height: 278px;
  position: relative;
  box-sizing: border-box;
  padding: 10px 16px 16px 16px;
}
</style>


/* div flex col
img display block fixed width / height
h3 title class master title

*/
