<template>
  <div id="app">
    <MapComponent></MapComponent>
  </div>
</template>

<script>
import MapComponent from './components/MapComponent'

export default {
  name: 'App',
  components: {
    MapComponent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
