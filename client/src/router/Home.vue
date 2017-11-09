<template>

<section class="home">
    <div class="container">
    <div id="home">
        <h2>BDDB</h2>
    </div>
    <div id="words">
        <h3>DECOUVREZ, CONTRIBUEZ</h3>
        <h3>ECHANGEZ AVEC LA COMMUNAUTE</h3>
        <a class="decouvrez" href="/Browse" >
        <button type="button" name="DECOUVREZ">DECOUVREZ</button>
      </a>
      <a class="contribuez" href="/add-master" >
        <button type="button" name="CONTRIBUEZ">CONTRIBUEZ</button>
      </a>
    </div>
  </div>

</section>

  </template>

<style>
#home {
  padding-top: 15px;
  font-family: smilingCat;
  font-style: oblique;
  font-family: smilingCat;
  font-weight: normal;
  font-size: 100px;
  text-align: center;
  color: red;

}
#words {

  font-style: oblique;
  font-family: smilingCat;
  font-weight: normal;
  text-align: center;
  color: black;
  font-size: 25px;
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
  top: 100px;
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
