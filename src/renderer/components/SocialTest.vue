<template>
  <div id="wrapper">
    <div id="editor" class="container">
      <div>
        <label>Description</label>
        <textarea placeholder="Describe the stream..." v-model="description" cols="80" rows="4"></textarea>
      </div>
      <div>
        <label>Game</label>
        <input v-model="game" type="text">
      </div>
      <hr/>
      <div>
        <label>Stream Name</label>
        <textarea id="StreamName" rows="1" class="output" v-html="updateTwitchTitle"></textarea>
        <button @click="copyToClipboard('#StreamName')">👆</button>
        <label>Output</label>
        <textarea id="SocialText" rows="6" class="output" v-html="updateOutput"></textarea>
        <button @click="copyToClipboard('#SocialText')">👆</button>
      </div>
    </div>  </div>
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

<style>
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
        background-color:var(--foo);
        padding: 1em;
        border: none;
        font-family: inherit;
        width: 50%;
        font-size: 9pt;
    }
</style>
