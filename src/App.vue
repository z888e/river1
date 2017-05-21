<template>
  <div id="app">
    <div id="banner">
      <h1>{{ msg }}</h1>
      <ul>
      <router-link v-for="route in this.$router.options.routes" tag="li" :to="route.path">
        <a>{{ route.name }}</a>
      </router-link>
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
/*  border: 1px solid green;
*/}

ul li {
  padding: 0.2rem 3rem;
  margin: -0.1rem;
  border: 1px solid black;
  background-color: #65976D;
}

li:hover {
  background-color: #77B07F;
}

a {
  color: black;
  text-decoration: none;
}


</style>
