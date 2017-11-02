<template>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="" alt="Artist image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{publisher.name}}</p>
              </div>
    </div>

    <div class="content">
      <div class="info">
            <p>Profil : {{publisher.profile}}</p>
      </div>
    </div>
  </div>
</div>

    
</template>

<script>
export default {
  props: ["publisher"]
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