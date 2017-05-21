<template>
  <div id="app">
    <div class="banner">
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
  text-align: center;
  margin: -0.5rem;
}

.banner{
background-color: #828AA6;
padding: 0.1rem;
}

ul{
  list-style-type: none;
  display: inline-flex;
  padding-left: 0;
}

ul li{
  padding: 0 3rem;
}


</style>
