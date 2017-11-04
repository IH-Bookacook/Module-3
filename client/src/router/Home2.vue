<template>

<section class="container">
    <div class="content">
    <div id="home"  >

        <h2>BDDB</h2>
    </div>
    <div id="words">
        <h3>DECOUVREZ</h3>
        <h3>CONTRIBUEZ</h3>
        <h3>ECHANGEZ AVEC LA COMMUNAUTE</h3>
        <button type="button" name="DECOUVREZ">DECOUVREZ</button>
        <button type="button" name="CONTRIBUEZ">CONTRIBUEZ</button>

    </div>
  </div>

   <div class="slide show" style="background-image: url('../assets/bgimg8.jpg');"></div>
    <div class="slide" style="background-image: url('../assets/bgimg1.jpg');"></div>
    <div class="slide" style="background-image: url('../assets/bgimg2.jpg');"></div>

</section>

  </template>

<script>
ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

https: function cycleBackgrounds() {
  var index = 0;

  $imageEls = $(".container .slide"); // Get the images to be cycled.

  setInterval(function() {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;

    // Show the next
    $imageEls.eq(index).addClass("show");

    // Hide the previous
    $imageEls.eq(index - 1).removeClass("show");
  }, 2000);
}

// Document Ready.
$(function() {
  cycleBackgrounds();
});
</script>


<style>
#home {
  font-family: smilingCat;
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  color: black;
}
#words {
  font-family: Roboto;
  font-weight: bold;
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

.content {
  position: relative;
  top: 50px;
  height: 400px;
  max-width: 600px;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgrey;
  border-radius: 20px;
  opacity: 0.97;
  background-color: white;
}

.container {
  width: 100%;
  height: 500px;
  position: relative;
}

.slide {
  z-index: 1;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  transition: opacity 1s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  &.show {
    opacity: 1;
  }
}
</style>
