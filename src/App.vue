<template>
  <div class="container">
    <div class="main">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.container {
  background: #f0f2f5;
  margin-left: 200px;
  padding: 15px;
}
.main {
  background: #fff;
  height: calc(100vh - 80px);
  padding: 15px;
}
</style>
