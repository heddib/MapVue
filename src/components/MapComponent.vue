<template>
  <div id="map">
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
    <gmap-custom-marker alignment="bottomright" :marker="marker">
      <div class="card">
        <center>
          Test
        </center>
      </div>
    </gmap-custom-marker>
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
import GmapCustomMarker from 'vue2-gmap-custom-marker';

export default {
  name: 'MapComponent',
  components: {
    'gmap-custom-marker': GmapCustomMarker
  },
  data() {
    return {
      marker: {
        lat: 48.8005,
        lng: 2.6038
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    border-radius: 4px;
    background-color: #fafafa;
    padding: 15px;
    box-shadow: 3px 3px 3px grey;
    border: 1px solid #ccc;
    min-height: 110px;
}
</style>
