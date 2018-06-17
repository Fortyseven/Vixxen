<template>
    <div id="ComponentContainer">
        <main>
            <h1><font-awesome-icon icon="cog"/> Config</h1>

            <fieldset>
                <legend>Twitch</legend>
                <label>Channel Name
                    <input type="text" v-model="channel"/>
                </label>
            </fieldset>

        </main>
    </div>
</template>

<script>
/************************************************************************/
// import SystemInformation from "./LandingPage/SystemInformation";
var shell = require("electron").shell;

import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';

export default {
    name: "config",
    computed: {
        channel: {
            get() {return this.$store.state.StreamConfig.channel_name;},
            set() {debugger;}
        }
    }
};
/***********************************************************************/
</script>

<style>
    .dlgNewEntry {
        background: red;
    }
</style>
