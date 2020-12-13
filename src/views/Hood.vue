<template>
    <div id="hood-page">
        <div class="hero-image container">
            <div id="rattling">
                <p>You heard some rattling in the engine bay last time you drove.</p> 
                <p>Want to fix this up on your own?</p>
            </div>
            <div id="yes">
            <button type="button" id="yeah" v-on:click="$router.push({name: 'diy'})">Yeah, I've got this! It'll be easy!</button>
            </div>
            <div id="no">
            <button type="button" id="nah" v-on:click="$router.push({name: 'mechanic'})">Nah, I should probably call a mechanic...</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'hood',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');

div#hood-page div.hero-image{
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
    background-image: url('../assets/CroppedEngineBay.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.2;
  }

.container{
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-areas: 
    "rattling rattling"
    "yes no";
    height: 100vh; 
}

div#rattling{
    grid-area: rattling;
    position: relative;
    text-align: center;
    font-family: 'Racing Sans One', Helvetica, sans-serif;
    color: #d00000;
    font-size: 2.5em;
    margin-block: 0em;
    padding-top: 1em;
    }

div#rattling p{
    margin-block: 0.5em;
}

div#yes{
    grid-area: yes;
    position: relative;
    text-align: center;
}

div#no{
    grid-area: no;
    position: relative;
    text-align: center;
}

button{
  position: relative;
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