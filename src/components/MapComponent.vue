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

    <gmap-marker
    v-for="(marker, index) in markers"
    :key="index"
    :position="marker.position"
    :label="marker.name"
    >
      
    </gmap-marker>

    </GmapMap>
  </div>
</template>

<script>
// import GmapCustomMarker from 'vue2-gmap-custom-marker';

export default {
  name: 'MapComponent',
  components: {
    // 'gmap-custom-marker': GmapCustomMarker
  },
  methods: {
    addMarker(name, lat, lng) {
      this.markers.push({
        position: {
          lat: lat,
          lng: lng,
        },
        name: name
      })
    }
  },
  data() {
    return {
      markers: []
    }
  },
  mounted() {
    this.addMarker('Tour Eiffel', 48.858370, 2.294481);
    this.addMarker('Disneyland Paris', 48.876077, 2.79646);
    this.addMarker('Musée du Louvre', 48.861016, 2.335879);
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
