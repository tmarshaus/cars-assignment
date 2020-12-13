<template>
  <div class="about">
    <p>This webpage was created to describe cars, particularly the joys of owning one. From troubleshooting weird noises to gearing up for a road trip, assuming you have your driver's license, there's nothing quite like being behind the wheel. Enjoy!</p>
  </div>
</template>

<script>
export default {
name: 'About',
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

.about{
  background-color: #14213dff;
  height: 100vh;
  width: 100%;
}

p {
  font-family: 'Racing Sans One', Helvetica, sans-serif;  
  font-size: 2em;
  color: #e5e5e5ff;
  text-align: center;
  margin: 1.5em;
}
</style>