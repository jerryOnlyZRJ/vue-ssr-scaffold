<template>
  <div id="app">
    <div class="main">
      <h1>Welcome to N.MKV!</h1>
      <figure>
        <img class="picture-logo" src="./assets/images/nmkv.jpg">
      </figure>
      <router-view></router-view>
      <p>
        <router-link to="/">Go to Index</router-link>
        <router-link to="/helloworld">Go to HelloWorld</router-link>
      </p>
    </div>
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
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  margin: 1rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.picture-logo {
  width: 80%;
  max-width: 534px;
}
@media (max-width: 50rem) {
  a {
    display: block;
    padding: 1rem;
    border: 2px solid #188eee;
    border-radius: 2rem;
    color: #188eee;
    font-weight: bold;
  }
}
</style>
