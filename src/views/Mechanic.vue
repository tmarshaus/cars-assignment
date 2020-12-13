<template>
  <div id="mechanic-page">
      <div class="hero-image container">
        <p id="first">You made the right choice!</p>
        <p id="second">That'll still be $350, please.</p>
      </div>
  </div>
</template>

<script>
export default {
 name: 'mechanic'
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

div#mechanic-page div.hero-image{
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
    background-image: url('../assets/mechanicthumbsup.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.2;

  }

div#mechanic-page div.container p#first{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color: #d00000;
  font-size: 2.5em;
  margin-block: 0em;
  padding-top: 1em;
  padding-left: 1em;
}

div#mechanic-page div.container p#second{
  position: relative;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color:#d00000;
  font-size: 2.5em;
  margin-top: 0em;
  padding-top: 0em;
  padding-left: 1em;
}

</style>