import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueTouch from 'vue-touch'

Vue.use(VueTouch, {name: 'v-touch'})
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 