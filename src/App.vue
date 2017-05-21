<template>
  <div id="app">
    <div id="banner">
      <h1>{{ msg }}</h1>
      <ul>
        <router-link tag="li" to="/One"><a>One</a></router-link>
        <router-link tag="li" to="/Two"><a>Two</a></router-link>
        <router-link tag="li" to="/Three"><a>Three</a></router-link>
        <router-link tag="li" to="/Four"><a>Four</a></router-link>
        <router-link tag="li" to="/Five"><a>Five</a></router-link>
        <router-link tag="li" to="/Six"><a>Six</a></router-link>
        <router-link tag="li" to="/Seven"><a>Seven</a></router-link>
        <router-link tag="li" to="/Eight"><a>Eight</a></router-link>
        <router-link tag="li" to="/Nine"><a>Nine</a></router-link>

    </ul>
    </div>

    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to River1',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Iosevka', Helvetica, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: -0.5rem;
/*  border: 1px solid red;
*/}

#banner {
  background-color: #77B07F;
  color: black;
  padding: 0.1rem;
  text-align: center;
/*  border: 1px solid blue;
*/}

ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}

ul li {
  padding: 0.2rem 3rem;
  margin: -0.1rem;
  border: 1px solid black;
  background-color: #65976D;
}

li:hover {
  background-color: #71A57D;
}

a {
  color: black;
  text-decoration: none;
  margin: -0.2rem -3rem;
  padding: 0.2rem 3rem;
}

li.router-link-active {
  background-color: #77B07F;
  border-top: 0;
}


</style>
