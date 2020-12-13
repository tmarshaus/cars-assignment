<template>
  <div id="driver-test">
      <div class="hero-image container">
      <form @submit.prevent="submitForm" id="age-form">
      
      <div id="form-group">
      <label for="driver-age">Please Input Your Age: </label><br />
      <input id="driver-age" type="number" placeholder="Driver's Age" v-model="form.age" required>
      </div>
      
      <div>
      <button type="submit">Submit Age</button>
      </div>

      </form>
      </div>
  </div>
</template>

<script>
export default {
name: 'age-verification',
  data(){
    return {
      form: {
        age: null,
      },
    };
  },

  methods: {
    submitForm(){
      if (this.form.age >= 16){
        this.$router.push({name: 'driver-seat'});
      } else{
        this.$router.push({name: 'back-seat'});
      }
    },
  }
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

div#driver-test div.hero-image{
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
    background-image: url('../assets/DriverView.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.3;
}

.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-areas: 
    ". . ."
    ". form ."
    ". button .";
  text-align: center;
  height: 100vh;  
}

form#age-form{
    grid-area: form;
    position: relative;
    font-family: 'Racing Sans One', Helvetica, sans-serif;    
}

form#age-form label{
    color: #d00000;
    font-size: 2em;
}

form#age-form input{
    padding: 0.75em;
    margin-top: 1em;
    border-radius: 12px;
}

button{
  grid-area: button;
  position: relative;
  background-color: #e5e5e5ff;
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  color: #14213dff;
  font-size: 1.25em;
  padding: 1em;
  border-radius: 12px;
  margin-block: 1.5em;
}

button:hover{
  background-color: #6290C2;
  color: #fca311ff;
}
</style>