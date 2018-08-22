import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store/store';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fasolid from '@fortawesome/fontawesome-free-solid';

import LabelManager from './LabelManager';

// import Store from 'electron-store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;

import interpolateString from './utils/interpolateString';

fontawesome.library.add(fasolid);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.mixin({
    methods: {
        openExternal( href, user_browser = false ) {
            if ( user_browser ) {
                window.open( href );
            } else {
                this.$electron.shell.openExternal( href );
            }
        },
        getStoreGetter( key ) {
            return this.$store.getters[key];
        },
        interpolateString( instring ) {
            return interpolateString( this.$store, instring );
        }
    }
});



/* eslint-disable no-new */
var app_instance = new Vue({
    name: "Vixxen",
    components: { App },
    router,
    store,
    template: '<App/>',
});

Vue.use( LabelManager, {store, app_instance} );

app_instance.$mount('#app');


