<template>
    <div id="ComponentContainer">
        <h1><font-awesome-icon icon="cog"/> Config</h1>
        <h3>Twitch</h3>
        <div class="row no-gutters">
            <label class="col-md-2">Channel name:</label>
            <input class="col-md-10" v-model="twitch_user">
        </div>
        <hr/>
        <h3>Social</h3>
        <div class="row no-gutters">
            <label class="col-md-2">Twitter Template:</label>
            <textarea class="col-md-10" rows="6" v-model="twitter_template"/>
            <div class="w-100"></div>
            <div class="col-md-10 offset-md-2">
                <div><i>$DESCRIPTION</i> - Stream description</div>
                <div><i>$GAME</i> - Stream game</div>
                <div><i>$GAME_HASHTAG</i> - Hashified $GAME</div>
            </div>
        </div>
    </div>
</template>
<!-- ----------------------------------- -->
<script>
var shell = require("electron").shell;

import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
    name: "config",
    computed: {
        twitch_user: {
            get() {
                return this.$store.getters.getTwitchUser;
            },
            set(value) {
                this.$store.commit("setTwitchUser", value);
            }
        },
        twitter_template: {
            get() {
                return this.$store.getters.getTwitterTemplate;
            },
            set(value) {
                this.$store.commit("setTwitterTemplate", value);
            }
        }
    }
};
</script>
<!-- ----------------------------------- -->
<style>
.dlgNewEntry {
    background: red;
}
</style>
