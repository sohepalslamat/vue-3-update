<template>
  <div id="app">
    <h1>Hello Vue2</h1>
    <router-link to='/foo'>Foo</router-link> / 
    <router-link to="/doo">Doo</router-link>
    <router-view></router-view>    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
