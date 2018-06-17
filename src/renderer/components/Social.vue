<template>
    <div class="social container-fluid d-flex flex-column">
        <h1><font-awesome-icon icon="bullhorn"/> Social</h1>
        <div class="content">
            <h4>Description</h4>
            <textarea placeholder="Describe the stream..." v-model="description" cols="80" rows="4"></textarea>
            <h4>Game</h4>
            <input v-model="game" type="text">
            <h4>Stream Name</h4>
            <textarea id="StreamName" rows="1" class="output" v-html="updateTwitchTitle"></textarea>
            <button @click="copyToClipboard('#StreamName')">👆</button>
            <h4>Output</h4>
            <textarea id="SocialText" rows="6" class="output" v-html="updateOutput"></textarea>
            <button @click="copyToClipboard('#SocialText')">👆</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'social-test',
    data() { return {
        description: "This is a thing that's happening.",
        game: "Far Cry 5"
    }},
    computed: {
        updateTwitchTitle: function() {
            return `${this.description} || ${this.game.toUpperCase()} || 🕹 Slack Injection Arcade 👾`;
        },
        updateOutput: function() {
            return `${this.description}\n\n🔴LIVE 👉👉 '${this.game}' @ https://twitch.tv/drfortyseven\n\n#twitch ${this.hashify(this.game)}`;
        }
    },
    methods: {
        open (link) {
            this.$electron.shell.openExternal(link)
        },
        hashify( title ) {
            let stripped = title.trim().toLowerCase();
            stripped = stripped.replace(/\W/g, "");
            return `#${stripped}`;
        },
        copyToClipboard( id ) {
            $(id).select();
            document.execCommand("copy");
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
        font-family: "Ubuntu Mono";
    }
    textarea.output {
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
