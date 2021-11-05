import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)
import * as VueGoogleMaps from 'vue2-google-maps'



Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA-82NFW835QSuL2z2GXf-tZpADRjNw6hw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})


import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries
const firebase = require('firebase/app').default
const firebaseConfig = {
  apiKey: "AIzaSyBiFJ6xstMaWe9-sTZEYYN3Ea4fxMJyVqo",
  authDomain: "peluqueria-a6e4d.firebaseapp.com",
  projectId: "peluqueria-a6e4d",
  storageBucket: "peluqueria-a6e4d.appspot.com",
  messagingSenderId: "613793598831",
  appId: "1:613793598831:web:e3e51a70948c58876d2c9a"
};




firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
