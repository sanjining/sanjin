<template>
<Sjbutton type="mini">按钮</Sjbutton>
<Sjbutton type="small"></Sjbutton>
<Sjbutton type="normal"></Sjbutton>
<Sjbutton type="big"></Sjbutton>
</template>

<script>
import Sjbutton from './components/Sjbutton/index.vue'

export default {
  name: 'App',
  components: {
    Sjbutton
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
