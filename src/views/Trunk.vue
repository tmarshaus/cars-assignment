<template>
  <div id="trunk">
      <div class="fade-in container">
          <div id="first">
            <p >This uhhhh...wasn't the best idea.</p>
          </div>
          <div id="second">
            <p >Might want to click that Home button.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'trunk',


}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');

.container{
    
    background-color: #000000ff;
    height: 100vh;   
    text-align: center;
    
}

div#trunk div.fade-in p {
    font-family: 'Racing Sans One', Helvetica, sans-serif;
    color: #e5e5e5ff;
    font-size: 2em;
}

div#first {
    grid-area: first;
    padding-top: 2.5em;
    margin-top: 0em;
}

div#second{
    grid-area: second;
    padding-top: 2.5em;
    margin-top: 0em;
}

.fade-in {
  animation: fadeIn ease 4s;
  -webkit-animation: fadeIn ease 4s;
  -moz-animation: fadeIn ease 4s;
  -o-animation: fadeIn ease 4s;
  -ms-animation: fadeIn ease 4s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
    0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

</style>