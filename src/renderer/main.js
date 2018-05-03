import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fasolid from '@fortawesome/fontawesome-free-solid';

import Store from 'electron-store';


fontawesome.library.add(fasolid);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


