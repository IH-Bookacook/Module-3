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
        <router-link  :to="`/masters/${master._id}`"><p class="title is-4">{{master.title}}</p></router-link>
      </div>
    </div>

    <div class="content">
      <div class="info">
            <p>Auteur : {{master.credits[0].artist.name}}</p>
            <p v-if="master.series">Série : {{master.series.name}}</p>
            <p>Ajouté par : {{master.addedBy.username}}</p>
       </div>
    </div>
  </div>
</div>

    
</template>

<script>
import DetailedMasterCard from "@/components/DetailedMasterCard";

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
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.card-image {
  padding-left: 8px;
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
