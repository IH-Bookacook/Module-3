<template>

<section class="home">
    <div class="container">
    <div id="home">
        <h2>BDDB</h2>
    </div>
    <div id="words">
        <h3>DECOUVREZ, CONTRIBUEZ</h3>
        <h3>ECHANGEZ AVEC LA COMMUNAUTE</h3>
        <br>
        <a class="button is-danger button is-large is-active" style="background-color:#4772b7" ><router-link to="/browse" style="color:#f5f5f5">
                  DECOUVREZ</router-link></a>
        <a class="button is-danger button is-large is-active" style="background-color:#4772b7" ><router-link to="/add-master" style="color:#f5f5f5">
                  CONTRIBUEZ</router-link></a>

    </div>
  </div>

</section>

  </template>

<style>
#home {
  font-family: smilingCat;
  font-style: oblique;
  font-size: 90px;
  text-align: center;
  color: #ff0000;
}
#words {
  font-family: smilingCat;
  font-size: 30px;
  text-align: center;
  color: black;
}
.home {
  background-image: url("../assets/bgimg8.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  top: 50px;
  height: 400px;
  max-width: 600px;
  border-style: solid;
  border-width: 3px;
  border-color: grey;
  border-radius: 300px;
  opacity: 0.97;
  background-color: #f5f5f5;
}
</style>
