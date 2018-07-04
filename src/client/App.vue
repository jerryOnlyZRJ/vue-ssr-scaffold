<template>
  <div id="app">
    <p>Welcome to N.MKV!</p>
    <router-view></router-view>
    <p>
      <router-link to="/">Go to Index</router-link>
      <router-link to="/helloworld">Go to HelloWorld</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
:root{
  --mainColor: #188eee;
};
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
