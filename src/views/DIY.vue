<template>
  <div id="diy-page">
      <div class="hero-image container">
        <p id="first">Well that's a weekend lost.</p>
        <p id="second">Plus a few grand to get this "engine" thingy put back in the car.</p>
      </div>
  </div>
</template>

<script>
export default {
name: 'diy'
}
</script>

<style scoped>
/* CSS HEX 
--black: #000000ff;
--oxford-blue: #14213dff;
--orange-web: #fca311ff;
--red: #d00000;
--platinum: #e5e5e5ff;
--white: #ffffffff;
*/

@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
/* font-family: 'Racing Sans One', cursive; */

div#diy-page div.hero-image{
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
    background-image: url('../assets/engine-removed.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.2;
  }



div#diy-page div.container p#first{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color: #d00000;
  font-size: 2.5em;
  margin-block: 0em;
  padding-top: .5em;
  padding-left: 1em;
}

div#diy-page div.container p#second{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color:#d00000;
  font-size: 2.5em;
  margin-top: 0em;
  padding-top: 0em;
  padding-left: 1.5em;
}


</style>