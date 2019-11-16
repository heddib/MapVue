import App from './App.vue'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAiCfiKcJAQkKFPOCT3n5qjWF8fXsnCrEw',
    v: "3.26"
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
