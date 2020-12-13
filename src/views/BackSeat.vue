<template>
  <div id="back-seat">
      <div class="hero-image container">
        <p id="first">Sorry, dude.</p>
        <p id="second">Can't enjoy that driver's seat until you're 16.</p>
      </div>
  </div>
</template>

<script>
export default {
name: 'driver-seat',
}
</script>

<style scoped>
div#back-seat div.hero-image{
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
    background-image: url('../assets/BackseatView.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
  }

div#back-seat div.container p#first{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color: #d00000;
  font-size: 2.5em;
  margin-block: 0em;
  padding-top: 1em;
  padding-left: 1em;
}

div#back-seat div.container p#second{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color:#d00000;
  font-size: 2.5em;
  margin-top: 0em;
  padding-top: 0em;
  padding-left: 2em;
}
</style>