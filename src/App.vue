<template>
  <div id="app">
    <header>
      <h1>Cars!</h1> 
    </header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #14213dff;
}

#app header h1 {
  
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  font-size: 4em;
  color: #d00000;
  text-align: left;
  margin-block: 0.25em;
  padding-left: 0.25em;

}

#nav {
  background-color:#e5e5e5ff;
  padding: 0.5em;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
}

#nav a {
  font-family: 'Racing Sans One', Helvetica, sans-serif;
  font-size: 1.25em;
  text-decoration: none;
  color: #14213dff;
}

#nav a:hover {
  color: #fca311ff;
}

#nav a.router-link-exact-active {
  color: #d00000;
  text-decoration: underline;
}
</style>
