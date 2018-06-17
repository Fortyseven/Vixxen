<template>
    <div class="chat">
        <h1><font-awesome-icon icon="comments"/> Chat</h1>
        <div class="iframe-container">
            <iframe
                    frameborder="0"
                    scrolling="false"
                    id="twitch_chat"
                    height="100%"
                    width="100%"
                    src="http://www.twitch.tv/embed/drfortyseven/chat">
            </iframe>
        </div>
        <div class="external-links">
            <div class="col-6">
                <button class="btn w-100" @click="openExternal('http://www.twitch.tv/embed/drfortyseven/chat')">
                    <font-awesome-icon icon="share"></font-awesome-icon> Open Twitch chat in new window
                </button>
            </div>
            <div class="col-6">
                <button class="btn w-100" @click="openExternal('https://restream.io/webchat-app')">
                    <font-awesome-icon icon="share"></font-awesome-icon> Restream Chat
                </button>
            </div>

        </div>
    </div>
</template>

<script>
/************************************************************************/
var shell = require("electron").shell;

export default {
    name: "chat",

    data: () => {
        return {
            isOpen: false,
        }
    },
    computed: {
        favorites() {
            return this.$store.getters.getFavorites;
        }
    },
    methods: {
        openLink(link) {
            this.$electron.shell.openExternal(link);
        },
        dialog() {
            return {
                isOpen() {
                    return isOpen;
                },
                open() {
                    this.data().isOpen = true;
                    console.log("Fuck");
                }
            }
        },
        openChatExternal( href ) {
            window.open(href, "Chat window");
            //this.$electron.shell.openExternal( href );
        }
    },
};

/***********************************************************************/
</script>

<style>
    .chat {
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .chat > h1 {
        flex: 0 0 auto;
    }
    .chat > .iframe-container {
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        flex-direction: column;
    }
    .chat > div > iframe {
        width: 100%;
        height: 100%;
        padding-bottom: 1rem;
    }
    .chat > .external-links {
        flex: 0 0 auto;
        display: flex;
    }
</style>
