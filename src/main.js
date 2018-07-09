import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCj6cZ307r7jBZ5etVihVnJN0E0aHZIXBU',
      authDomain: 'sesh-b26b3.firebaseapp.com',
      databaseURL: 'https://sesh-b26b3.firebaseio.com',
      projectId: 'sesh-b26b3',
      storageBucket: 'sesh-b26b3.appspot.com'
    })
  }
})
