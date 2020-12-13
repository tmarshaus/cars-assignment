<template>
  <div id="driver-seat">
      <div class="hero-image container">
        <p id="first">Ahhh...</p>
        <p id="second">That sweet sweet open road.</p>
      </div>
  </div>
</template>

<script>
export default {
name: 'driver-seat',
}
</script>

<style scoped>
div#driver-seat div.hero-image{
  position: relative;
  height: 100vh;
  width: 100%;
}

div.hero-image::before{
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url('../assets/TrafficJam.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.25;

  }

div#driver-seat div.container p#first{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color: #d00000;
  font-size: 2.5em;
  margin-block: 0em;
  padding-top: 3.25em;
  padding-left: 3em;
}

div#driver-seat div.container p#second{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color:#d00000;
  font-size: 2.5em;
  margin-top: 0em;
  padding-top: 0em;
  padding-left: 4.5em;
}
</style>