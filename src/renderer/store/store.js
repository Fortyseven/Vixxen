import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

import twitch from './twitch';
import stream from './stream';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    modules: {
        twitch,
        stream
    },
    plugins: [
        vuexLocal.plugin
    ]
});