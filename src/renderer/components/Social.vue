<template>
    <div class="social container-fluid d-flex flex-column">
        <h1><font-awesome-icon icon="bullhorn"/> Social</h1>
        <div class="content">
            <h4>Description</h4>
            <textarea placeholder="Describe the stream..." v-model="description" cols="80" rows="4"></textarea>
            <h4>Game</h4>
            <input v-model="game" type="text">
            <div class="row no-gutters">
                <div class="w-100"><hr/></div>
            </div>
            <h4>Stream Name</h4>
            <textarea id="StreamName" rows="1" readonly class="output" v-html="updateTwitchTitle"></textarea>
            <div class="row no-gutters">
                <button class="btn col-2" @click="copyToClipboard('#StreamName')">👆 Copy</button>
            </div>
            <br/>
            <h4>Twitter</h4>
            <textarea id="SocialText" rows="6" readonly class="output" v-html="updateOutput"></textarea>
            <div class="row no-gutters">
                <button class="btn col-2 m-1" @click="copyToClipboard('#SocialText')">👆 Copy</button>
                <button class="btn col-2 m-1" @click="tweet">🐦 Tweet</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters} from 'vuex';

export default {
    name: 'social',
    computed: {
        updateTwitchTitle: function() {
            return `${this.description} || ${this.game.toUpperCase()} || 🕹 Slack Injection Arcade 👾`;
        },
        updateOutput: function() {
            //return `${this.description}\n\n🔴LIVE 👉👉 '${this.game}' @ https://twitch.tv/${this.getTwitchUser}\n\n#twitch ${this.hashify(this.game)}`;
            return this.interpolateString( this.getStoreGetter('getTwitterTemplate') );
        },
        description: {
            get() {
                return this.$store.getters.getStreamDescription;
            },
            set(value) {
                this.$store.commit('setStreamDescription', value);
            }
        },
        game: {
            get() {
                return this.$store.getters.getStreamGame;
            },
            set(value) {
                this.$store.commit('setStreamGame', value);
            }
        },

    },
    methods: {
        open (link) {
            this.$electron.shell.openExternal(link)
        },
        copyToClipboard( id ) {
            $(id).select();
            document.execCommand("copy");
        },
        tweet() {
            let tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent( this.updateOutput );
            this.openExternal( tweet );
        }
    }
};
</script>

<style lang="scss" scoped>
.social {
    label {
        display: block;
        font-weight: bold;
    }
    button {
        display: block;
    }
    textarea {
    }
    textarea.output {
        font-family: "Ubuntu Mono";
        padding: 1em;
        border: none;
        font-family: inherit;
        width: 100%;
        font-size: 9pt;
        background: rgba(255,255,255,0.25);
        color: white;
        font-family: monospace;
    }
}
</style>
