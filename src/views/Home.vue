<template>
  <div id="home-page">
    <div class="hero-image container">
      <div class="hood">
        <button type="button" id="pop-hood" v-on:click="$router.push({name: 'hood'})">Pop the hood!</button>
      </div>
      <div class="front-seat">
        <button type="button" id="driver-seat" v-on:click="$router.push({name: 'age-verification'})">Take this sweet ride for a spin!</button>
      </div>
      <div class="trunk">
        <button type="button" id="enter-trunk" v-on:click="$router.push({name: 'trunk'})">Jump in the trunk!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
div#home-page div.hero-image{
  background-image: url('../assets/CroppedFordPinto.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

div.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-areas: 
    ". . ."
    "hood front-seat trunk";
  height: 100vh; 
  border: solid 2px #14213dff; 
}

.hood{
  grid-area: hood;
  text-align: center;

}

.front-seat{
  grid-area: front-seat;
  text-align: center;
}

.trunk{
  grid-area: trunk;
  text-align: center;
}

button{
  background-color: #e5e5e5ff;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color: #14213dff;
  font-size: 1.25em;
  padding: 1em;
  border-radius: 12px;
}

button:hover{
  background-color: #6290C2;
  color: #fca311ff;
}

</style>
