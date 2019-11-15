<template>
  <div id="app">
    <GmapMap
      v-bind:center="{lat:48.866667, lng:2.333333}"
      v-bind:zoom="10"
      map-type-id="terrain"
      style="height: 100vh"
      :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: true,
   rotateControl: true,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
    >
      <GmapMarker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
