<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      msg: 'Welcome to River1',
    };
  },
};
</script>

<style scoped>
.header{
  border: 1px solid black;
}
</style>
