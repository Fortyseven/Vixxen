<template>
    <div class="home">
        <h1><font-awesome-icon icon="home"/> Home</h1>
        <div class="container">
            <div class="row">
                <h4>Twitch</h4>
            </div>
            <div class="row">
                <div class="col-auto"><button class="btn" @click="openExternal('https://inspector.twitch.tv')">Inspector</button></div>
            </div>
            <div class="row">
                <h4>Restream.io</h4>
            </div>
            <div class="row">
                <div class="col-auto"><button class="btn" @click="openExternal('https://restream.io/titles')">Restream Titles</button></div>
            </div>
        </div>
    </div>
</template>

<script>
/************************************************************************/
// import SystemInformation from "./LandingPage/SystemInformation";
var shell = require("electron").shell;

export default {
    name: "home",
    //   components: {
    //     SystemInformation
    //   },
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
        }
    },

};
/***********************************************************************/
</script>

<style>
    .dlgNewEntry {
        background: red;
    }
</style>
