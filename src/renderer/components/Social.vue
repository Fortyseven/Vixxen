<template>
    <div class="social container-fluid d-flex flex-column">
        <h1><font-awesome-icon icon="bullhorn"/> Social</h1>
        <b-container>
            <b-row>
                <b-col>
                    <b-form-group>
                        <b-row>
                            <b-input-group
                                id="socialDescription"
                                size="lg">
                                <b-input-group-prepend is-text>
                                    Description
                                </b-input-group-prepend>
                                <b-input
                                    placeholder="Describe the stream..."
                                    v-model="description"/>
                            </b-input-group>
                        </b-row>
                        <br/>
                        <b-row>
                            <b-input-group
                                id="socialGame"
                                prepend="Game"
                                size="lg">

                                <b-input
                                    v-model="game"
                                    type="text"/>
                            </b-input-group>
                        </b-row>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row><hr/></b-row>

            <b-row>
                <b-col md="5" class="mr-2">
                    <b-row>
                        <h4>Stream Title</h4>
                    </b-row>
                    <b-row>
                        <b-textarea id="StreamName" rows="9" readonly class="output" v-html="updateTwitchTitle"></b-textarea>
                    </b-row>
                    <b-row class="mt-2">
                        <b-button class="" @click="copyToClipboard('#StreamName')">👆 Copy</b-button>
                    </b-row>
                </b-col>

                <b-col md="5">
                    <b-row>
                        <h4>Twitter</h4>
                    </b-row>
                    <b-row>
                        <b-textarea id="SocialText" rows="9" readonly class="output" v-html="updateOutput"></b-textarea>
                    </b-row>
                    <b-row class="mt-2">
                        <b-button class="mr-2" @click="copyToClipboard('#SocialText')">👆 Copy</b-button>
                        <b-button class="" @click="tweet">🐦 Tweet</b-button>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<!-- ----------------------------------- -->
<script>
// import { mapGetters} from 'vuex';

export default {
    name: "social",
    computed: {
        updateTwitchTitle: function() {
            return `${
                this.description
            } || ${this.game.toUpperCase()} || 🕹 Slack Injection Arcade 👾`;
        },
        updateOutput: function() {
            //return `${this.description}\n\n🔴LIVE 👉👉 '${this.game}' @ https://twitch.tv/${this.getTwitchUser}\n\n#twitch ${this.hashify(this.game)}`;
            return this.interpolateString(
                this.getStoreGetter("getTwitterTemplate")
            );
        },
        description: {
            get() {
                return this.$store.getters.getStreamDescription;
            },
            set(value) {
                this.$store.commit("setStreamDescription", value);
            }
        },
        game: {
            get() {
                return this.$store.getters.getStreamGame;
            },
            set(value) {
                this.$store.commit("setStreamGame", value);
            }
        }
    },
    methods: {
        open(link) {
            this.$electron.shell.openExternal(link);
        },
        copyToClipboard(id) {
            $(id).select();
            document.execCommand("copy");
        },
        tweet() {
            let tweet =
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(this.updateOutput);
            this.openExternal(tweet);
        }
    }
};
</script>
<!-- ----------------------------------- -->
<style lang="scss" scoped>
.social {
    textarea.output {
        font-size: 0.8em;
    }
}
</style>
