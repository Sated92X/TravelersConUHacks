import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from "vue2-google-maps";
import VueSocketIO from 'vue-socket.io'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import {store} from './store/store'

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
    vuetify,
    store
}).$mount('#app')

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDb38eOeort7qc_U56E6esfIcpnXEBZzho",
    libraries: "places" // necessary for places input
  }
}); 

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'localhost:80',
}))
